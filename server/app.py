from flask import Flask, request, jsonify
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Transportlamarque40'
app.config['MYSQL_DB'] = 'trucks_delievery'


def db_connection():
    return mysql.connector.connect(
        host=app.config['MYSQL_HOST'],
        user=app.config['MYSQL_USER'],
        password=app.config['MYSQL_PASSWORD'],
        database=app.config['MYSQL_DB']
    )
    
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
    print("test")

    return jsonify({'message': 'Devis envoye avec succes'})

    if __name__ == '__main__':
        app.run(debug=True)
