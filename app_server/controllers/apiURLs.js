const apiURL = {
  server : 'http://localhost:3000'
};

if (process.env.NODe_ENV === 'production') {
  apiURL.server = 'https://lamsajere.azurewebsites.net';
}

module.exports = apiURL;
