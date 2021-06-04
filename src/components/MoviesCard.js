import React from 'react'
import {Link} from "react-router-dom";

import {moviesData} from './MoviesData'
import {Card} from 'react-bootstrap'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const MoviesCard = ({film}) => {

    return (
        <>
        <div>
            <Card bg="dark" style={{ width: '18rem' }} className='cardStyle'>
                <Card.Img variant="top" src={film.posterURL} alt={film.posterURL} className='img'/>
                <Card.Body>
                    <Card.Title style={{color:"burlywood"}}>{film.title}</Card.Title> 
                    <Link to={{pathname:`/description/${film.id}`, 
                                state:{
                                    moviesData
                                }
                                }}><h5 className="linkDescription">go to description</h5></Link>
                </Card.Body>
            </Card>
        </div>
        </>
    )
}

export default MoviesCard
