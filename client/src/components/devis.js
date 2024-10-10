import React, { useState } from 'react';
import axios from 'axios';

const FormQuote = () => {
  const [dataQuote, setdataQuote] = useState({
    name: '',
    materials: '',
    weight:'',
    departures_address: '',
    arrival_address:'',
    email: ''
  });

  const changeInput = (event) => setdataQuote({ ...dataQuote, [event.target.name]: event.target.value });

  const submitInput = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post('/quote', dataQuote);
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
      <input type="text" name="name" value={dataQuote.name} onChange={changeInput} />
      <label>Matériels:</label>
      <input type="text" name="materials" value={dataQuote.materials} onChange={changeInput} />
      <label>Adresse de départ:</label>
      <input type="text" name="departures_address" value={dataQuote.departures_address} onChange={changeInput} />
      <label>Adresse d'arrivée:</label>
      <input type="text" name="arrival_address" value={dataQuote.arrival_address} onChange={changeInput} />
      <label>Email:</label>
      <input type="email" name="email" value={dataQuote.email} onChange={changeInput} />
      <button type="submit">Envoyer</button>
    </form>
  );

};

export default FormQuote;
