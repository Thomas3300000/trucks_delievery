import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import titre from '../images/titre.png';

// Composant Navbar, qui affiche le navbar de la page

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      {/* Conteneur principal de la navbar */}
      <div className="container-fluid position-relative">
        
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        {/* Titre de la navbar créé avec une image */}
        <div className="navbar-title">
          <img src={titre} alt="Logo" className="navbar-logo" />
        </div>

        {/* Bouton pour afficher ou masquer le menu sur les écrans mobiles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-2 ms-4">

            {/* Lien vers la page d'accueil */}
            <li className="nav-item">
              <Link to="/" className="nav-link fs-4">Accueil</Link>
            </li>

            {/* Lien vers la page des remorques */}
            <li className="nav-item">
              <Link to="/materiels" className="nav-link fs-4">Remorques</Link>
            </li>
            
            {/* Lien vers la page de devis avec un bouton */}
            <li className="nav-item">
              <Link to="/devis" className="btn btn-primary px-4 py-2 fs-4">Devis</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
