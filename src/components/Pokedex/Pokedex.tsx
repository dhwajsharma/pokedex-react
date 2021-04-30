import React from 'react'
import PokeList from '../PokeList/PokeList'
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult'
import SearchBox from '../SearchBox/SearchBox'
import "./Pokedex.css"

const Pokedex = () => {
    return (
        <div className="pokedex">
                <div className="pokedex_pokelist">
                    <SearchBox />
                    <PokeList />
                </div>
                <div className="pokedex_pokeSearchResult">
                    <PokeSearchResult />
                </div>
        </div>
    )
}

export default Pokedex
