const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

let Contact = require('./contacts.json');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json(Contact);
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
