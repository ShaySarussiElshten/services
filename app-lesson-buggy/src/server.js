const express = require('express');
const app = express();
const PORT = 3000;

let counter = 0;

app.get('/', (req, res) => {
  counter += 1;
  if (counter > 3) {
    res.status(500).send('Whoops, something is wrong');
    return;
  }

  res.send('[buggy] Hello, Kubernetes!\n');;
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});