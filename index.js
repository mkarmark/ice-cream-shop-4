const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Flavors data
const flavors = [
  'Vanilla',
  'Chocolate',
  'Strawberry',
  'Mint Chocolate Chip',
  'Cookie Dough',
  'Rocky Road',
  'Pistachio',
  'Mango',
  'Salted Caramel',
];

// Founders story
const foundersStory = `
  Our ice cream shop was founded by two best friends, Mia and Carlos, who shared a passion for creating the creamiest, most delicious ice cream in town. Starting from a small kitchen, their dream grew into a beloved community spot where everyone can find their favorite flavor and a friendly smile.`;

// Social media links
const socialLinks = [
  { name: 'Instagram', url: 'https://instagram.com/yourshop' },
  { name: 'Facebook', url: 'https://facebook.com/yourshop' },
  { name: 'Twitter', url: 'https://twitter.com/yourshop' },
];

app.get('/', (req, res) => {
  res.render('index', {
    flavors,
    foundersStory,
    socialLinks,
  });
});

app.listen(PORT, () => {
  console.log(`Ice Cream Shop app running at http://localhost:${PORT}`);
}); 