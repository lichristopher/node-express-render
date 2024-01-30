// quoteController.js

const quotes = require('../data.js'); // Assuming you have a separate file for your randomQuotes function
console.log(quotes);
function getRandomQuote(req, res) {
  function randomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    console.log(randomIndex);
    return quote;
  }
  res.json({ quote: randomQuote() });
}

module.exports = {
  getRandomQuote,
};
