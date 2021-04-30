import React from 'react'
import PokeCard from '../PokeCard/PokeCard'
import "./PokeList.css"

const PokeList = () => {
    return (
        <div className="pokeList">
            <PokeCard name="pikachu" />
            <PokeCard name="bulbasaur" />
            <PokeCard name="charlizard" />
            <PokeCard name="ivysaur" />
            <PokeCard name="venasaur" />

        </div>
    )
}

export default PokeList
