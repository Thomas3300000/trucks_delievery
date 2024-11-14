import os
from flask import Flask, request, jsonify
import mysql.connector
from flask_cors import CORS
from dotenv import load_dotenv
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

# Chargement des variables d'environnement depuis le fichier .env
load_dotenv()

# Initialisation de l'application Flask
app = Flask(__name__)
CORS(app)

# Configuration de la connexion à la base de données MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = os.getenv('MYSQL_USER')
app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD')
app.config['MYSQL_DB'] = 'trucks_delievery'

# Variables liées à l'envoi d'email via SendGrid
SENDGRID_API_KEY = os.getenv('SENDGRID_API_KEY')
FROM_EMAIL = os.getenv('FROM_EMAIL')
COMPANY_EMAIL = os.getenv('COMPANY_EMAIL')

# Fonction pour établir la connexion à la base de données MySQL
def db_connection():
    return mysql.connector.connect(
        host=app.config['MYSQL_HOST'],
        user=app.config['MYSQL_USER'],
        password=app.config['MYSQL_PASSWORD'],
        database=app.config['MYSQL_DB']
    )

# Fonction pour envoyer un email via SendGrid
def send_email(to_email, subject, content):
    message = Mail(
        from_email=FROM_EMAIL,
        to_emails=to_email,
        subject=subject,
        html_content=content
    )
    try:
        sg = SendGridAPIClient(SENDGRID_API_KEY)
        response = sg.send(message)
        print(f"Email envoyé avec le statut : {response.status_code}")
        return response.status_code
    except Exception as e:
        print(f"Erreur lors de l'envoi de l'email : {e}")

# Route d'accueil de l'API
@app.route('/')
def index():
    return "Bienvenue sur l'API Trucks-Delivery!"

# Route pour gérer la demande de devis
@app.route('/quote', methods=['POST'])
def quote():
    # Récupération des données envoyées par le client (nom, email, etc...)
    data = request.json
    nom = data['nom']
    email = data['email']
    telephone = data['telephone']
    matiere = data['matiere']
    poids = data['poids']
    adresse_depart = data['adresse_depart']
    adresse_arrivee = data['adresse_arrivee']

    # Connexion à la base de données et insertion des données du devis
    connect = db_connection()
    cursor = connect.cursor()

    cursor.execute(
        "INSERT INTO devis (nom, email, telephone, matiere, poids, adresse_depart, adresse_arrivee) VALUES (%s, %s, %s, %s, %s, %s, %s)", 
        (nom, email, telephone, matiere, poids, adresse_depart, adresse_arrivee)
    )
    
    connect.commit()
    cursor.close()
    connect.close()

    # Création du contenu de l'email destiné à l'entreprise (contenant les détails du devis)
    entreprise_mail = f"""
    <html>
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <div style="width: 80%; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <h3 style="color: white; font-size: 50px; text-align: center; background-color: black; padding: 10px;">Nouvelle demande de devis</h3>
            <ul style="list-style-type: none; padding: 50px; color: #333; font-size: 20px;">
                <li><strong>Nom :</strong> {nom}</li>
                <li><strong>Email :</strong> {email}</li>
                <li><strong>Téléphone :</strong> {telephone}</li>
                <li><strong>Matière à transporter :</strong> {matiere}</li>
                <li><strong>Poids :</strong> {poids} kg</li>
                <li><strong>Adresse de départ :</strong> {adresse_depart}</li>
                <li><strong>Adresse d'arrivée :</strong> {adresse_arrivee}</li>
            </ul>
        </div>
    </body>
    </html>
    """

    # Envoi de l'email à l'entreprise avec la demande de devis
    send_email(COMPANY_EMAIL, "Nouvelle demande de devis", entreprise_mail)

    # Création du contenu de l'email de confirmation destiné au client
    client_content = f"""
    <html>
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <div style="width: 80%; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); text-align: center;">
            <h3 style="color: white; background-color: #1d1c1c; padding: 10px; font-size: 50px;">Bonjour {nom}</h3>
            <div style="border: 3px solid #1d1c1c; padding: 20px; font-size: 20px;">
                <p>Votre demande de devis a bien été envoyée.</p>
                <p>Voici un récapitulatif de votre demande :</p>
                <ul style="list-style-type: circle; padding-left: 120px; text-align: left; font-size: 20px; margin: 50px">
                    <li><strong>Matière à transporter :</strong> {matiere}</li>
                    <li><strong>Poids :</strong> {poids} kg</li>
                    <li><strong>Adresse de départ :</strong> {adresse_depart}</li>
                    <li><strong>Adresse d'arrivée :</strong> {adresse_arrivee}</li>
                </ul>
                <p>Nous vous contacterons sous peu.</p>
                <p>Merci de votre confiance !</p>
            </div>
            <div style="margin-left: auto; color: white; background-color: #1d1c1c; text-align: center; padding-right: 10px;">
                <p>Transport Lamarque</p>
                <p>01 23 45 67 89</p>
                <p>123 Rue de la Logistique, Paris, France</p>
            </div>
        </div>
    </body>
    </html>
    """

    # Envoi de l'email de confirmation au client
    send_email(email, "Confirmation de votre demande de devis avec l'entreprise Transport Lamarque", client_content)
  
    return jsonify({'message': 'Devis envoyé avec succès'})


if __name__ == '__main__':
    app.run(debug=True)
