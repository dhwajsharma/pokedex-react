import React from 'react'
import {PokemonSchema} from "../../types/PokemonSchema"
import PokeCard from '../PokeCard/PokeCard'
import "./PokeList.css"

interface PokeListProps {
    searchedPokemons: PokemonSchema[];
}

const PokeList = ({searchedPokemons}: PokeListProps) => {
    return (
        <div className="pokeList">
            {
                searchedPokemons.map((pokemon)=>{
                    return (
                        pokemon.name && (
                        <PokeCard 
                            key={pokemon.id}
                            name={pokemon.name}
                            spriteUrl = {pokemon.sprites.normal}
                        />
                        )
                       
                    )
                })
            }
        </div>
    )
}

export default PokeList
