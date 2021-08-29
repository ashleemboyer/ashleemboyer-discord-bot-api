require('dotenv').config();

const axios = require('axios');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello!');
});

app.post('/webhooks/draft/created', (req, res) => {
  axios
    .post(
      'https://discord.com/api/webhooks/881375545886130228/vs_FISr9b_J4EytaRGvPFsoGA2CwtRi_7RJLekqfm-nYCbGzQcy7DukZMk94oq2a0MOz',
      {
        content: 'Ashlee just created a newsletter draft!',
      }
    )
    .then(() => res.sendStatus(200))
    .catch((error) => {
      console.error('There was an error', error);
      res.sendStatus(500);
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
