import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import titre from '../images/titre.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid position-relative">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="navbar-title">
          <img src={titre} alt="Logo" className="navbar-logo" />
        </div>
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
            <li className="nav-item">
              <Link to="/" className="nav-link fs-4">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link to="/materiels" className="nav-link fs-4">Remorques</Link>
            </li>
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
