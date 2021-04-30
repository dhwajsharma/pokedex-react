import React from 'react'
import "./PokeCard.css"

interface PokecardProps{
    spriteUrl?: string;
    name: string;
}

const PokeCard = ({spriteUrl, name}: PokecardProps) => {
    return (
        <div className="pokeCard">
            
            <img className="pokeCard_sprite" src={spriteUrl} alt="pokemon"/>
            <p>{name}</p>
        </div>
    )
}

export default PokeCard
