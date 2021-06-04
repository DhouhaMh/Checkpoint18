import React from 'react'

import Search from './Search'
import StarRating from './StarRating'
import AddMovie from './AddMovie'

const Header = ({addFilm, name, setName, ratingSearch, setRatingSearch}) => {
    return (
        
            <header>
                <h1 className="text">The most popular Movies</h1>
                <nav  className="nav-menu">
                    <div className="search-rate">
                        <Search name={name} setName={setName} />
                        <StarRating rate={ratingSearch} setRate={setRatingSearch} />
                    </div>

                    <AddMovie addFilm={addFilm}/>
                </nav>

            </header>

    )
}

export default Header
