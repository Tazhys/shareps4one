const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const Cheat = require('./models/cheat');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/ghcheets', { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/', async (req, res) => {
    let searchOptions = {};
    if (req.query.search) {
        searchOptions.gameTitle = new RegExp(req.query.search, 'i');
    }
    const cheats = await Cheat.find(searchOptions);
    res.render('index', { cheats: cheats, currentPage: 'home' });
});

app.get('/submit', (req, res) => {
    res.render('submit', { currentPage: 'submit' });
});


app.post('/submit', async (req, res) => {
    const { gameTitle, titleId, cheatDescription, cheatCode, author } = req.body;

    const cheat = new Cheat({
        gameTitle,
        titleId,
        cheatDescription,
        cheatCode,
        author,
    });

    try {
        await cheat.save();
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.render('submit', { currentPage: 'submit', errorMessage: 'Error submitting cheat. Please try again.' });
    }
});

const PORT = process.env.PORT || 6531;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
