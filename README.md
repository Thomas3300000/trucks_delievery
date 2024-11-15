# Trucks-Delivery

![Image application formulaire](/root/trucks_delievery/client/src/images/image-readme.png)

Trucks-Delivery est une application web dédiée à une entreprise de transport poids-lourd, permettant aux clients de demander des devis pour la livraison de divers matériaux. Ce projet comprend une interface frontend où les utilisateurs soumettent leurs demandes, ainsi qu'un backend qui gère les données, les stocke dans une base de données MySQL et envoie les informations par e-mail via SendGrid.
Dans ce projet, il n'y a pas pour le moment d'interface implementer pour que l'entreprise puisse géré ces demandes de devis.

## Lien vers le projet déployé

- **Landing Page** : [Voir la landing page](https://trucksdelievery.netlify.app/)
- **Article Blog** : [Lire l'article de blog sur le projet](https://medium.com/@8844/projet-trucks-delivery-69d19a1c11da)
- **Auteur** : [MAIlLARD Thomas](https://www.linkedin.com/in/maillard-thomas/)

## Installation

### Prérequis
Avant de commencer, vous devez avoir installé les outils suivants :

- [Python](https://www.python.org/) (version 3.6 ou supérieure) pour le backend avec Flask
- [MySQL](https://www.mysql.com/) pour la gestion de la base de données
- [SendGrid](https://sendgrid.com/) pour l'envoi des emails (avec une clé API)

Si vous travaillez sur le frontend React :

- [Node.js](https://nodejs.org/) (version LTS recommandée)
- [npm](https://www.npmjs.com/) pour gérer les dépendances du projet React


### Étapes d'installation

1. **Forkez le dépôt**
   
   Forkez le projet depuis GitHub pour avoir votre propre copie du projet.

   - Allez sur sur le github du projet (https://github.com/Thomas3300000/trucks_delievery)
   - Cliquez sur le bouton **Fork** en haut à droite.

2. **Clonez le dépôt forké**

   Clonez votre copie du projet sur votre machine locale en utilisant Git :

   ```bash
   git clone https://github.com/votre-utilisateur/trucks-delivery.git
   cd trucks-delivery

2. **Installation des dépendances backend**
Accédez au répertoire backend de votre projet et installez les dépendances avec pip (assurez-vous d'avoir un environnement virtuel activé) :

```bash
cd backend
pip install -r requirements.txt
```
3. **Configuration des variables d'environnement**
Dans le répertoire backend, créez un fichier .env et ajoutez les informations suivantes (vous devez avoir un compte SendGrid et une base de données MySQL configurée) :

```env
MYSQL_USER=your_mysql_user
MYSQL_PASSWORD=your_mysql_password
SENDGRID_API_KEY=your_sendgrid_api_key
FROM_EMAIL=your_from_email
COMPANY_EMAIL=your_company_email
```
4. **Lancer le backend**
Une fois les dépendances installées et la configuration terminée, lancez l'application Flask avec la commande suivante :

```bash
flask run
```
L'API sera accessible à l'adresse http://localhost:5000.

5. **Installation des dépendances frontend**
Ensuite, accédez au répertoire du frontend (React) et installez les dépendances avec npm :

```bash
cd frontend
npm install
```

6. **Lancer le frontend**
Une fois les dépendances installées, démarrez le serveur de développement React :

```bash
npm start
```
L'application frontend sera disponible à l'adresse http://localhost:3000.

7. **Accéder à l'application**
Ouvrez un navigateur et accédez à http://localhost:3000 pour voir l'application en action. Vous pourrez soumettre des demandes de devis, qui seront traitées par l'API Flask et envoyées à l'entreprise via e-mail.

## Contribuer ##
Si vous souhaitez contribuer à ce projet, veuillez suivre les étapes ci-dessous :

Forkez le dépôt.
Créez une branche pour vos modifications (git checkout -b le-nom-de-votre-branche).
# Ajouter les fichiers modifiés à l'index
```
git add .
```

# Committer les modifications
```
git commit -m "Description de mes modifications"
```

# Push sur GitHub
```
git push origin ma-nouvelle-branche
```

Ouvrez une Pull Request.

## Licence ##

Ce projet est un projet personnel dans le cadre d'une formation et ne possède pas de licence officielle. Il est destiné uniquement à des fins académiques, ne peut pas être redistribué et peut être modifié en respectant les consignes énoncées plus haut.
