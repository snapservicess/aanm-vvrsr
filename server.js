const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let notices = [];

app.get('/notices', (req, res) => {
  res.json(notices);
});

app.post('/notices', (req, res) => {
  const notice = req.body;
  notices.unshift(notice);
  res.status(201).json(notice);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});