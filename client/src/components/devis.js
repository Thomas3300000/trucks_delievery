import React, { useState } from 'react';
import axios from 'axios';

const FormQuote = () => {
  const [dataQuote, setdataQuote] = useState({
    nom: '',
    telephone: '',
    email: '',
    matiere: '',
    poids:'',
    adresse_depart: '',
    adresse_arrivee:''
  });

  const changeInput = (event) => setdataQuote({ ...dataQuote, [event.target.name]: event.target.value });

  const submitInput = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post('http://127.0.0.1:5000/quote', dataQuote);
        if (response.status === 200) {
            alert('Devis soumis avec succès');
        } else {
            alert('Erreur lors de la soumission');
        }
    } catch (error) {
        alert('Erreur lors de la soumission');
    }
  };

  return (
    <form onSubmit={submitInput}>
      <h1>Demande de Devis</h1>
      <label>Nom - Prenom / Entreprise:</label>
      <input type="text" name="nom" value={dataQuote.nom} onChange={changeInput} />
      <label>Telephone:</label>
      <input type="text" name="telephone" value={dataQuote.telephone} onChange={changeInput} />
      <label>Email:</label>
      <input type="email" name="email" value={dataQuote.email} onChange={changeInput} />
      <label>Matériels:</label>
      <input type="text" name="matiere" value={dataQuote.matiere} onChange={changeInput} />
      <label>Poids à transpoter:</label>
      <input type="text" name="poids" value={dataQuote.poids} onChange={changeInput} />
      <label>Adresse de départ:</label>
      <input type="text" name="adresse_depart" value={dataQuote.adresse_depart} onChange={changeInput} />
      <label>Adresse d'arrivée:</label>
      <input type="text" name="adresse_arrivee" value={dataQuote.adresse_arrivee} onChange={changeInput} />
      <button type="submit">Envoyer</button>
    </form>
  );

};

export default FormQuote;
