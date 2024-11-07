import os
from flask import Flask, request, jsonify
import mysql.connector
from flask_cors import CORS
from dotenv import load_dotenv
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

load_dotenv()

app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = os.getenv('MYSQL_USER')
app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD')
app.config['MYSQL_DB'] = 'trucks_delievery'

SENDGRID_API_KEY = os.getenv('SENDGRID_API_KEY')
FROM_EMAIL = os.getenv('FROM_EMAIL')
COMPANY_EMAIL = os.getenv('COMPANY_EMAIL')

def db_connection():
    return mysql.connector.connect(
        host=app.config['MYSQL_HOST'],
        user=app.config['MYSQL_USER'],
        password=app.config['MYSQL_PASSWORD'],
        database=app.config['MYSQL_DB']
    )

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
        return response.status_code
    except Exception as e:
        print(f"Erreur lors de l'envoi de l'email : {e}")

@app.route('/')
def index():
    return "Bienvenue sur l'API Trucks-Delivery!"

@app.route('/quote', methods=['POST'])
def quote():
    data = request.json
    nom = data['nom']
    email = data['email']
    telephone = data['telephone']
    matiere = data['matiere']
    poids = data['poids']
    adresse_depart = data['adresse_depart']
    adresse_arrivee = data['adresse_arrivee']

    connect = db_connection()
    cursor = connect.cursor()

    cursor.execute(
        "INSERT INTO devis (nom, email, telephone, matiere, poids, adresse_depart, adresse_arrivee) VALUES (%s, %s, %s, %s, %s, %s, %s)", 
        (nom, email, telephone, matiere, poids, adresse_depart, adresse_arrivee)
    )
    
    connect.commit()
    cursor.close()
    connect.close()

    entreprise_mail = entreprise_mail = f"""
<html>
<head>
    <style>
        body {{
            font-family: Arial, sans-serif;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }}
        .container {{
            width: 80%;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
            border: 3px solid #000;
        }}
        h3 {{
            color: red;
            font-size: 30px;
            margin-bottom: 20px;
            background-color: black;
        }}
        ul {{s
            list-style: disc;
            list-style-position: inside;
            padding-left: 0;
            text-align: left;
        }}
        li {{
            padding: 8px 0;
            font-size: 16px;
        }}
        .footer {{
            margin-top: 20px;
            text-align: left;
            font-size: 18px;
            color: red;
            background-color: #000;
            margin-bottom: 40px;
        }}
        .footer p {{
            margin: 0;
            
        }}
    </style>
</head>
<body>
    <div class="container">
            <h3>Nouvelle demande de devis</h3>
            <ul>
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

    send_email(COMPANY_EMAIL, "Nouvelle demande de devis", entreprise_mail)

    
    client_content = client_content = f"""
<html>
<head>
    <style>
        body {{
            font-family: Arial, sans-serif;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }}
        .container {{
            width: 80%;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            font-size: 20px;
            text-align: center;
        }}
        .border {{
            border: 3px solid #1d1c1c;
            margin: 0;
            padding: 20px;
            margin-bottom: 0px;
        }}
        .border p {{
            line-height: 1.2;
            text-align: left;
            padding-left: 280px;
        }}
        h3 {{
            color: white;
            font-size: 30px;
            margin-bottom: 0;
            background-color: #1d1c1c;
        }}
        ul {{
            list-style: disc;
            list-style-position: inside;
            padding-left: 300px;
        }}
        li {{
            padding: 8px 0;
            font-size: 16px;
            text-align: left;
        }}
       .footer {{
            margin-top: 0;
            text-align: center;
            font-size: 20px;
            color: white;
            background-color: #1d1c1c;	
            margin-bottom: 0;
        }}
    </style>
</head>
<body>
    <div class="container">
        <h3>Bonjour {nom}</h3>
        <div class="border">
            <p>Votre demande de devis a bien été envoyée.</p>
            <p>Nous vous contacterons sous peu.</p>
            <p>Voici un récapitulatif de votre demande :</p>
            <ul>
                <li><strong>Matière à transporter :</strong> {matiere}</li>
                <li><strong>Poids :</strong> {poids} kg</li>
                <li><strong>Adresse de départ :</strong> {adresse_depart}</li>
                <li><strong>Adresse d'arrivée :</strong> {adresse_arrivee}</li>
            </ul>
            <p>Nous vous contacterons sous peu.</p>
            <p>Merci de votre confiance !</p>
        </div>
     <div class="footer">
            <p>Transport Lamarque</p>
            <p>01 23 45 67 89</p>
            <p>123 Rue de la Logistique, Paris, France</p>
        </div>
    </div>
</body>
</html>
"""

    send_email(email, "Confirmation de votre demande de devis avec l'entreprise Transport Lamarque", client_content)
    
    return jsonify({'message': 'Devis envoyé avec succès'})

if __name__ == '__main__':
    app.run(debug=True)
