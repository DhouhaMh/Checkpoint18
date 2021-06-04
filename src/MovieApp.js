import React, {useState} from "react";

import {moviesData} from './components/MoviesData'
import Header from './components/Header'
import MovieList from './components/MovieList'


const MovieApp = () => {
    
  const[movies, setMovies]=useState(moviesData)
  const [name, setName] = useState('')
  const [ratingSearch, setRatingSearch ] = useState(0)

  //add new movie
  let addFilm = (newMovie, e)=>{
    e.preventDefault()
    setMovies([newMovie, ...movies])
  }
    return (
        <div>
            <Header addFilm={addFilm} name={name} setName={setName} ratingSearch={ratingSearch} setRatingSearch={setRatingSearch}/>
            <MovieList movies={movies} name={name} ratingSearch={ratingSearch}/>
        </div>
    )
}

export default MovieApp
