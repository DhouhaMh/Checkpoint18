import React from 'react'
import {useParams} from 'react-router-dom'
import {moviesData} from './MoviesData'

const Trailer = (props) => {
   
    const x = props.location
    let { id } = useParams();
    let text = x.state.moviesData[parseInt(id, 10)]

    return (
        <div>
           
            <iframe className="video-display" width="560" height="315" src={text.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        </div>
    )
}

export default Trailer
