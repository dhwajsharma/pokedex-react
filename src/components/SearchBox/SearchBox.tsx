import React from 'react'
import "./SearchBox.css"

interface SearchBoxProps{
    onInputChange: (inputValue: string) => void;
}

const SearchBox = ({onInputChange}: SearchBoxProps) => {
    return (
        <div className="searchBox">
            <input onChange={(e)=>{
                onInputChange(e.target.value)
            }} className="searchBox_search" type="search" placeholder="Search Pokemons"/>
        </div>
    )
}

export default SearchBox
