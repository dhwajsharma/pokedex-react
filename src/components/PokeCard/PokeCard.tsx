import React from 'react'
import "./PokeCard.css"

interface PokecardProps{
    spriteUrl?: string;
    name: string;
    onPokemonClick: (pokemonName: string) => void;
}

const PokeCard = ({spriteUrl, name, onPokemonClick}: PokecardProps) => {
    return (
        <div onClick={()=> onPokemonClick(name)} className="pokeCard">
            
            <img className="pokeCard_sprite" src={spriteUrl} alt="pokemon"/>
            <p>{name}</p>
        </div>
    )
}

export default PokeCard
