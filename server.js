const historical = require('./historical.json');
const cors = require('cors');
const next = require('next');
const Pusher = require('pusher');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ dev });
const handler = app.getRequestHandler();

// Ensure that your pusher credentials are properly set in the .env file
// Using the specified variables
const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: process.env.PUSHER_APP_CLUSTER,
    encrypted: true
});

app.prepare()
    .then(() => {
    
    const server = express();
    
    server.use(cors());
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    
    server.get('*', (req, res) => {
        return handler(req, res);
    });

    // <Simulated stock prices>

    let historicalChanges = [];
    for (let i = 0; i < historical.length - 1; i++) {
      historicalChanges = [...historicalChanges, historical[i] - historical[i+1]];
    }

    // </Simulated stock prices>

    let cash = 10000;
    let shares = 0;
    let pricePerShare = historical[historical.length - 1];
    let prices = [pricePerShare];

    server.post('/trade', (req, res, next) => {
      const {buy = null, sell = null} = req.body;

      status = 'fail';

      if (buy) {
        if (cash / pricePerShare >= Number(buy)) {
          shares += Number(buy);
          cash -= Number(buy) * pricePerShare;
          pusher.trigger('trading', 'trade-feedback', { buy: 'success' });
        } else {
          pusher.trigger('trading', 'trade-feedback', { buy: 'fail' });
        }
      }

      if (sell) {
        if (shares >= Number(sell)) {
          shares -= Number(sell);
          cash += Number(sell) * pricePerShare;
          pusher.trigger('trading', 'trade-feedback', { sell: 'success' });
        } else {
          pusher.trigger('trading', 'trade-feedback', { sell: 'fail' });
        }
      }

      pusher.trigger('trading', 'update-account', { cash, shares });
    })

    server.post('/load', (req, res, next) => {
      res.json({ prices, cash, shares, pricePerShare, status: 'success'});
    })
    
    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });

    setInterval(() => {
      pricePerShare += historicalChanges[Math.floor(Math.random()*(historicalChanges.length-1))];
      prices = [...prices, pricePerShare];
      pusher.trigger('trading', 'new-price', { pricePerShare });
    }, 1000);
    
    })
    .catch(ex => {
      console.error(ex.stack);
      process.exit(1);
    });