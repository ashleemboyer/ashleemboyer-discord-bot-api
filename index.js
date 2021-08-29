require('dotenv').config();

const axios = require('axios');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const setUpEmailWebhooks = () => {
  console.log('Setting up email webhooks...');

  app.post('/webhooks/email/created', (req, res) => {
    axios
      .post(process.env.NEWSLETTER_UPDATES_WEBHOOK_URL, {
        content: 'Ashlee just created and delivered an email!',
      })
      .then(() => res.sendStatus(200))
      .catch((error) => {
        console.error('There was an error', error);
        res.sendStatus(500);
      });
  });

  console.log('Finished setting up email webhooks!');
};

const setUpScheduledEmailWebhooks = () => {
  console.log('Setting up scheduled email webhooks...');

  app.post('/webhooks/scheduled-email/created', (req, res) => {
    axios
      .post(process.env.NEWSLETTER_UPDATES_WEBHOOK_URL, {
        content: 'Ashlee just scheduled an email!',
      })
      .then(() => res.sendStatus(200))
      .catch((error) => {
        console.error('There was an error', error);
        res.sendStatus(500);
      });
  });

  app.post('/webhooks/scheduled-email/converted', (req, res) => {
    axios
      .post(process.env.NEWSLETTER_UPDATES_WEBHOOK_URL, {
        content: 'A scheduled email just went out!',
      })
      .then(() => res.sendStatus(200))
      .catch((error) => {
        console.error('There was an error', error);
        res.sendStatus(500);
      });
  });

  app.post('/webhooks/scheduled-email/deleted', (req, res) => {
    axios
      .post(process.env.NEWSLETTER_UPDATES_WEBHOOK_URL, {
        content: 'Ashlee just deleted a scheduled email',
      })
      .then(() => res.sendStatus(200))
      .catch((error) => {
        console.error('There was an error', error);
        res.sendStatus(500);
      });
  });

  console.log('Finished setting up scheduled email webhooks!');
};

const setUpSubscriberWebhooks = () => {
  console.log('Setting up subscriber webhooks...');

  app.post('/webhooks/subscriber/churned', (req, res) => {
    axios
      .post(process.env.NEWSLETTER_UPDATES_WEBHOOK_URL, {
        content:
          "Someone has unenrolled from the paid newsletter. That's okay! It just wasnt their cup of tea.",
      })
      .then(() => res.sendStatus(200))
      .catch((error) => {
        console.error('There was an error', error);
        res.sendStatus(500);
      });
  });

  app.post('/webhooks/subscriber/created', (req, res) => {
    axios
      .post(process.env.NEWSLETTER_UPDATES_WEBHOOK_URL, {
        content: 'Someone just signed up for the newsletter!',
      })
      .then(() => res.sendStatus(200))
      .catch((error) => {
        console.error('There was an error', error);
        res.sendStatus(500);
      });
  });

  app.post('/webhooks/subscriber/confirmed', (req, res) => {
    axios
      .post(process.env.NEWSLETTER_UPDATES_WEBHOOK_URL, {
        content: 'Someone confirmed their newsletter subscription!',
      })
      .then(() => res.sendStatus(200))
      .catch((error) => {
        console.error('There was an error', error);
        res.sendStatus(500);
      });
  });

  app.post('/webhooks/subscriber/paid', (req, res) => {
    axios
      .post(process.env.NEWSLETTER_UPDATES_WEBHOOK_URL, {
        content: 'Someone enrolled in the paid newsletter!',
      })
      .then(() => res.sendStatus(200))
      .catch((error) => {
        console.error('There was an error', error);
        res.sendStatus(500);
      });
  });

  app.post('/webhooks/subscriber/paused', (req, res) => {
    axios
      .post(process.env.NEWSLETTER_UPDATES_WEBHOOK_URL, {
        content: 'Someone paused their paid subscription.',
      })
      .then(() => res.sendStatus(200))
      .catch((error) => {
        console.error('There was an error', error);
        res.sendStatus(500);
      });
  });

  app.post('/webhooks/subscriber/resumed', (req, res) => {
    axios
      .post(process.env.NEWSLETTER_UPDATES_WEBHOOK_URL, {
        content: 'Someone resumed their paid subscription!',
      })
      .then(() => res.sendStatus(200))
      .catch((error) => {
        console.error('There was an error', error);
        res.sendStatus(500);
      });
  });

  app.post('/webhooks/subscriber/trial/started', (req, res) => {
    axios
      .post(process.env.NEWSLETTER_UPDATES_WEBHOOK_URL, {
        content: 'Someone has started a subscription trial!',
      })
      .then(() => res.sendStatus(200))
      .catch((error) => {
        console.error('There was an error', error);
        res.sendStatus(500);
      });
  });

  app.post('/webhooks/subscriber/trial/ended', (req, res) => {
    axios
      .post(process.env.NEWSLETTER_UPDATES_WEBHOOK_URL, {
        content: "Someone's subscription trial has ended.",
      })
      .then(() => res.sendStatus(200))
      .catch((error) => {
        console.error('There was an error', error);
        res.sendStatus(500);
      });
  });

  app.post('/webhooks/subscriber/unsubscribed', (req, res) => {
    axios
      .post(process.env.NEWSLETTER_UPDATES_WEBHOOK_URL, {
        content:
          "Someone unsubscribed from the newsletter. That's okay! It just wasnt their cup of tea.",
      })
      .then(() => res.sendStatus(200))
      .catch((error) => {
        console.error('There was an error', error);
        res.sendStatus(500);
      });
  });

  app.post('/webhooks/subscriber/updated', (req, res) => {
    axios
      .post(process.env.NEWSLETTER_UPDATES_WEBHOOK_URL, {
        content: 'A subscriber has been updated.',
      })
      .then(() => res.sendStatus(200))
      .catch((error) => {
        console.error('There was an error', error);
        res.sendStatus(500);
      });
  });

  console.log('Finished setting up subscriber webhooks!');
};

app.use(express.json());

setUpEmailWebhooks();
setUpScheduledEmailWebhooks();
setUpSubscriberWebhooks();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
