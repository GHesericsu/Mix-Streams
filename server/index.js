const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const environment = process.env.NODE_ENV || 'development';

const app = express();
const port = process.env.PORT || 3001;
const publicPath = path.join(__dirname, '/../client/dist');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(publicPath));

app.listen(port, () => {
  console.log(`connected on ${port}`);
});
