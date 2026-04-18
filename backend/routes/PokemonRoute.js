const express = require('express');
const router = express.Router();
const { getPokemons } = require('../controllers/pokemonController');

router.get('/pokemons/', getPokemons);

module.exports = router;