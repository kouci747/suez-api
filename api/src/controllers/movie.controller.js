const fetch = require('node-fetch');

const apiKey = 'ddd2adfb9ab8ad97c67276aa7df98236';
//note à moi-meme : ne pas oublier d'utliser dotenv pour cacher la clé api
exports.getMovie = async (req, res) => {
  const url =
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  const options = {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGQyYWRmYjlhYjhhZDk3YzY3Mjc2YWE3ZGY5ODIzNiIsInN1YiI6IjY0OGM4NzY0NDJiZjAxMDBjN2ZhYTA2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EmTPsyncR67fQFhfxQmZHTbLdF2Av--pHJk1lD37MfQ',
    },
  };

  try {
    const response = await fetch(`${url}&api_key=${apiKey}`, options);
    const data = await response.json();

    // Send the movie data in the response
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
