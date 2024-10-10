import React from 'react';
import Navbar from './components/navbar';
import Acceuil from './components/acceuil';
import Materiels from './components/materiels';
import Devis from './components/devis';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Acceuil />} />
                <Route path="/materiels" element={<Materiels />} />
                <Route path="/devis" element={<Devis />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
