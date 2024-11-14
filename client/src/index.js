import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 

// Création d'un "root" (point d'entrée) pour l'application dans l'élément HTML avec l'id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application dans le root, ici le composant principal <App />
root.render(
    <App />
);
