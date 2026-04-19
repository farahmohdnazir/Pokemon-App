"use client";

import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [query, setQuery] = useState("");
    const [searchText, setSearchText] = useState("");
    const [isFiltered, setIsFiltered] = useState(false);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const limit = 15;

    // GET pokemon list
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:5000/api/pokemons?page=${page}&limit=${limit}`);
            const json = await response.json();
            
            if (page === 1) {
                setPokemonList(json.filteredData);
            } else {
                setPokemonList(prev => [...prev, ...json.filteredData]);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearchPokemon = (e) => {
        setSearchText(query);
        setIsFiltered(true);
    };

    const handleClearSearch = () => {
        setQuery("");
        setSearchText("")
        setIsFiltered(false);
    }

    const searchedPokemon = searchText ?
        pokemonList.filter(pokemon =>
            pokemon.name.toLowerCase().includes(searchText.toLocaleLowerCase())
        ) : pokemonList;

    useEffect(() => { fetchData(); }, [page]);

    if(!pokemonList.length === 0 && loading) return <p>Loading.....</p>

    return (
        <div className='pokemon-container'>
            <div className='search-pokemon'>
                <input
                    className='search-input'
                    type='text'
                    placeholder='Search pokemon name...'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className='search-button' onClick={handleSearchPokemon}>Search</button>
                <button className='clear-button' onClick={handleClearSearch}>Clear</button>
            </div>

            {loading && pokemonList.length === 0 ? <p style={{ textAlign: "center" }}>Loading.....</p> : (
                <div className='pokemon-list'>
                    <Row>
                        {searchedPokemon.map((pokemon, index) => (
                            <Col md={4} key={index}>
                                <div className='details-box'>
                                    <div className="details-box-content">
                                        <div className='details-container'>
                                            <Row>
                                                <Col sm={4}>
                                                    <div className='pokemon-img-container'>
                                                        <img className='pokemon-img' src={pokemon.image} alt={pokemon.name} />
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className='pokemon-details'>
                                                        <div className='pokemon-details-box'>
                                                            <p className='pokemon-name'>{pokemon.name}</p>
                                                            <div>{pokemon.types.map((type, index) => (
                                                                <span className='pokemon-type' key={index}>{type}</span>
                                                            ))}</div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            )}
            
            <div className='load-more'>
                {!isFiltered && !loading && <button className='load-more-btn' onClick={() => setPage(prev => prev + 1)} disabled={loading}>
                    {loading ? 'Loading...' : 'Load More'}
                </button>}
            </div>
        </div>
    );
};

export default PokemonList;