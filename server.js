require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');


const SECRET_SESSION = process.env.SECRET_SESSION;
console.log('yooooooooooo..... >>> ',SECRET_SESSION);


app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

app.get('/', (req, res) => {
  res.render('index');
})


const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;


// NOTES

// understand Bootstrap, GET / POST practice/understanding, FORMS, EJS, SEEDING/MIGRATING, GRABBING AND USING MODEL DATA, 