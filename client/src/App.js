import React from 'react';
import Navbar from './components/navbar'; 
import Acceuil from './components/acceuil';
import Materiels from './components/materiels';
import Devis from './components/devis';
import Footer from './components/footer';
import ScrollToTop from './components/scroll';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// Fichier principal de l'application qui  fait le lien entre tout mes composants

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            {/* Définition des routes */}
            <Routes> 
                <Route path="/" element={<Acceuil />} /> {/* Route vers l'accueil */}
                <Route path="/materiels" element={<Materiels />} /> {/* Route vers les remorques */}
                <Route path="/devis" element={<Devis />} /> {/* Route vers le formulaire de devis */}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
