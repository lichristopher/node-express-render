const express = require('express');
const { getRandomQuote } = require('./controllers/quoteController');

const app = express();
const port = 3000; // You can change the port if needed

// Define a route to get a random quote
app.get('/random-quote', getRandomQuote);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
