const express = require('express');

const app = express();

app.use(express.static('./dist/calcdiscount'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/calcdiscount' }
  );
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`)