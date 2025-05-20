// CPAN 212 – Lab 2
// Name: Charanjeet Kaur
// Student Number: N01676380
// Description: Decorated Express server with custom routes

const express = require('express');
const app = express();
const port = 8000;

const routes = require('./routes');
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Created by: Charanjeet Kaur - N01676380');
});
