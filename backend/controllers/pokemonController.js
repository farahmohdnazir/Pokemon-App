const axios = require('axios');

const getPokemons = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 15;
        const startIndex = (page - 1) * limit; // same formula as Offset & Skip
        const endIndex = page * limit;

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${startIndex}`, {
            params: {
                page: page,
                per_page: limit
            }
        });

        const data = response.data;

        const result = {
            totalItems: data.results.length,
            totalPages: Math.ceil(data.results.length / limit),
            currentPage: page,
            data: data.results.slice(startIndex, endIndex)
        };
        
        const pokemonDetails = await Promise.all(
            data.results.map(async (pokemon) => {
                const res = await fetch(pokemon.url);
                return res.json();
            })
        );

        const filteredData = pokemonDetails.map(item => ({
            name: item.name,
            image: item.sprites.other["official-artwork"].front_default,
            types: item.types.map(type => type.type.name),
            height: item.height,
            weight: item.weight
        }));
        
        console.log(filteredData, result);
        res.status(200).json({
            filteredData,
            nextPage: page + 1
        });
    } catch (error) {
        console.error("Error fetching data: ", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { getPokemons };