import React, { useState } from 'react'
import "./PokeSearchResult.css"

const PokeSearchResult = () => {
    const [selectedPokemon, setSelectedPokemon] = useState(false);

    return (
        <div className="pokeSearchResult">
            {
                selectedPokemon ? (
                    <div>
                        <img src="" alt=""/>
                        <p>Name</p>
                        <p>id</p>
                        <p>height</p>
                        <p>weight</p>
                        <p>base exp</p>
                    </div>
                ) : (
                    <h2>Welcome to the Pokedex</h2>
                )
            }
        </div>
    )
}

export default PokeSearchResult
