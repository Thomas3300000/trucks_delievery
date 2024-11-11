import React from 'react';
import { Link } from 'react-router-dom';
import dataRemorques from './dataRemorques';

const Materiels = () => {
    return (
        <div className="container">
            <h1 className="title mb-5 fs-1">Ici,vous trouverez les remorques de haute qualité que nous possédons pour tous vos besoins de transport</h1>
            <div className="button text-center mb-3">
                <Link to="/devis" className="btn btn-primary px-4 py-2 fs-2">Demander un Devis</Link>
            </div>
            <div className="row">
                {dataRemorques.map((remorque) => (
                    <div key={remorque.id} className="col-md-4">
                        <div className="card">
                            <img src={remorque.image} alt={remorque.name} className="card-img-top" />
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
