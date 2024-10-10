import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/materiels">Remorques</Link></li>
        <li><Link to="/devis">Devis</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
