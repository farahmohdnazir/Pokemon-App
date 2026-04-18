require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const PokemonRoute = require('./routes/PokemonRoute');

app.use(express.json());
app.use(cors());

// GET all Pokemons
app.use('/api', PokemonRoute);

// Start server
app.listen(port, () => {
    console.log(`Pokemon API running at http://localhost:${port}`);
});