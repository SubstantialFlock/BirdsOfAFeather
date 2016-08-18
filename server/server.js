const express = require('express');
const bodyParser = require('body-parser');
const facebookHandler = require('./utils/utils.js').facebookHandler;
const foodFactsSearchHandler = require('./utils/utils.js').foodFactsSearchHandler;
const foodFactsUPCHandler = require('./utils/utils.js').foodFactsUPCHandler;

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/facebook', facebookHandler);
app.post('/api/foodfacts/search', foodFactsSearchHandler);
app.post('/api/foodfacts/upc', foodFactsUPCHandler);

app.listen(port, function() {
  console.log('NodeJS Running on port', port);
});
