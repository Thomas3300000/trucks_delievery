import React from 'react';
import { Link } from 'react-router-dom';
import dataRemorques from './dataRemorques';

// Composant Materiels, qui affiche la page de présentation des remorques
const Materiels = () => {
    return (
        <div className="container">
            {/* Phrase d'accroche */}
            <h1 className="title mb-5 fs-1">
                Ici,vous trouverez les remorques de haute qualité que nous possédons pour tous vos besoins de transport
            </h1>
            
            {/* Bouton pour demander un devis, avec un lien qui mene vers la page de demande de devis */}
            <div className="button text-center mb-3">
                <Link to="/devis" className="btn btn-primary px-4 py-2 fs-2">
                    Demander un Devis
                </Link>
            </div>
            
            {/* Conteneur des remorques */}
            <div className="row">
                {/* Map des données des remorques pour afficher chaque remorque */}
                {dataRemorques.map((remorque) => (
                    <div key={remorque.id} className="col-md-4">
                        {/* Carte pour chaque remorque */}
                        <div className="card">
                            {/* Image de la remorque */}
                            <img src={remorque.image} alt={remorque.name} className="card-img-top" />
                            
                            {/* Contenu de la carte avec le nom et la description */}
                            <div className="card-body">
                                <h5 className="card-title">{remorque.name}</h5>
                                <p className="card-text">{remorque.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Materiels;
