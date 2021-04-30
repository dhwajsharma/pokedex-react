import React from 'react'
import { PokemonSchema } from '../../types/PokemonSchema'
import PokeList from '../PokeList/PokeList'
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult'
import SearchBox from '../SearchBox/SearchBox'
import "./Pokedex.css"

interface PokedexProps{
    searchedPokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined; 
    onInputChange: (inputValue: string) => void;
    onPokemonClick: (pokemonName: string) => void;
}

const Pokedex = ({selectedPokemon, searchedPokemons, onInputChange, onPokemonClick}: PokedexProps) => {
    
    return (
        <div className="pokedex">
                <div className="pokedex_pokelist">
                    <SearchBox onInputChange={onInputChange} />
                    <PokeList
                    onPokemonClick={onPokemonClick}
                        searchedPokemons={searchedPokemons}
                    />
                </div>
                <div className="pokedex_pokeSearchResult">
                    <PokeSearchResult 
                    selectedPokemon={selectedPokemon}
                    />
                </div>
        </div>
    )
}

export default Pokedex
