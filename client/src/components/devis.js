import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormQuote = () => {
  const [dataQuote, setdataQuote] = useState({
    nom: '',
    telephone: '',
    email: '',
    matiere: '',
    poids: '',
    adresse_depart: '',
    adresse_arrivee: ''
  });

  const changeInput = (event) =>
    setdataQuote({ ...dataQuote, [event.target.name]: event.target.value });

  const submitInput = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/quote', dataQuote);
      if (response.status === 200) {
        toast.success(`Devis soumis avec succès !`);
        setdataQuote({
          nom: '',
          telephone: '',
          email: '',
          matiere: '',
          poids: '',
          adresse_depart: '',
          adresse_arrivee: ''
        });
      
      } else {
        toast.error('Erreur lors de la soumission');
      }
    } catch (error) {
      toast.error('Erreur lors de la soumission');
    }
  };

  return (
    <div className="container mt-5">
      <ToastContainer 
        position="top-center" 
        autoClose={10000} 
        hideProgressBar={false} 
        closeOnClick 
        pauseOnHover 
        draggable 
      />
      <form onSubmit={submitInput} className="form-quote p-4">
        <h1 className="text-center text-decoration-underline mb-5 fs-1.5">DEMANDE DE DEVIS</h1>
        <div className="mb-3">
          <label className="form-label">Nom/Prénom ou Entreprise:</label>
          <input
            type="text"
            name="nom"
            value={dataQuote.nom}
            onChange={changeInput}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Téléphone:</label>
          <input
            type="text"
            name="telephone"
            value={dataQuote.telephone}
            onChange={changeInput}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            value={dataQuote.email}
            onChange={changeInput}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Matériels ou Matières à transporter:</label>
          <input
            type="text"
            name="matiere"
            value={dataQuote.matiere}
            onChange={changeInput}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Poids à transporter (en kg):</label>
          <input
            type="text"
            name="poids"
            value={dataQuote.poids}
            onChange={changeInput}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Adresse de départ:</label>
          <input
            type="text"
            name="adresse_depart"
            value={dataQuote.adresse_depart}
            onChange={changeInput}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Adresse d'arrivée:</label>
          <input
            type="text"
            name="adresse_arrivee"
            value={dataQuote.adresse_arrivee}
            onChange={changeInput}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default FormQuote;
