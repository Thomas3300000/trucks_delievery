CREATE DATABASE IF NOT EXISTS trucks_delievery;

USE trucks_delievery;

CREATE TABLE devis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(254) NOT NULL,
    telephone VARCHAR(12) NOT NULL,
    matiere VARCHAR(100) NOT NULL,
    poids DECIMAL(10, 2) NOT NULL,
    adresse_depart VARCHAR(200) NOT NULL,
    adresse_arrivee VARCHAR(200) NOT NULL,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
