const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
  
app.use(bodyparser.json());

app.use('/', express.static(__dirname + '/../public/dist'))

let port = 5200;

app.listen(port, () => {
  console.log(`Listening to on port ${port}`);
})