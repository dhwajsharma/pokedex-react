import React from 'react'
import { PokemonSchema } from '../../types/PokemonSchema'
import PokeList from '../PokeList/PokeList'
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult'
import SearchBox from '../SearchBox/SearchBox'
import "./Pokedex.css"

interface PokedexProps{
    searchedPokemons: PokemonSchema[];
    onInputChange: (inputValue: string) => void;
}

const Pokedex = ({searchedPokemons, onInputChange}: PokedexProps) => {
    
    return (
        <div className="pokedex">
                <div className="pokedex_pokelist">
                    <SearchBox onInputChange={onInputChange} />
                    <PokeList
                        searchedPokemons={searchedPokemons}
                    />
                </div>
                <div className="pokedex_pokeSearchResult">
                    <PokeSearchResult />
                </div>
        </div>
    )
}

export default Pokedex
