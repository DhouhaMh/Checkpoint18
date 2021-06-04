import React from 'react'
import MoviesCard from './MoviesCard'

const MovieList = ({movies, name, ratingSearch}) => {

    return (
        <div className="allCards">
            {movies.filter(el=> el.title.toLowerCase().includes(name.toLowerCase().trim()) 
            && el.rating >= ratingSearch).map(film=> ( <MoviesCard film={film}/>))}

        </div>

    )
}


export default MovieList
