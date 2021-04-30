import React from 'react'
import "./Pokedex.css"

const Pokedex = () => {
    return (
        <div className="pokedex">
                <div className="pokedex_pokelist">
                    <p>list of pokemon</p>
                </div>
                <div className="pokedex_pokeSearchResult">
                    <p>Poke search results</p>
                </div>
        </div>
    )
}

export default Pokedex
