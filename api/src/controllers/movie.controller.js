const fetch = require('node-fetch');
const dotenv = require('dotenv').config();

const apiKey = process.env.apiKey;

/**
 * ce controlleur permet de récupérer les films de la page demandée depius l'API de themoviedb
 * en utilisant les tokens donnés à la création du compte avec mon email personnel
 * @param {*} req :prend en paramètre le numéro de la page
 * @param {*} res : renvoie un objet json contenant les films de la page demandée
 * @param {*} options : permet de passer le bearer token dans le header de la requête
 */
exports.getMovie = async (req, res) => {
  const { page = 1 } = req.params; //page par défaut = 1
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;

  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    },
  };

  try {
    //requete asynchrone : meilleure performance sur un grand nombre de requetes
    const response = await fetch(`${url}&api_key=${apiKey}`, options);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res
      .status(500)
      .json({ error: "Le serveur prend l'eau, appelez le 0977-422-423" }); //petit clin d'oeil à Suez :)
  }
};
