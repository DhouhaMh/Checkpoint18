import React from 'react'
import '../App.css'

const Search = ({name, setName}) => {
   
    return (
        <div>
            <input type="text" placeholder="Search" className="search" value={name} onChange={(e)=>setName(e.target.value)} />
            <button className="btn-search">Search</button>
         
        </div>
    )
}

export default Search
