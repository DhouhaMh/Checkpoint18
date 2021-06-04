
import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import '../App.css'


const StarRating = ({rate, setRate}) => {

    const [hover, setHover] = useState(null);
    
    return(
    <div style={{marginLeft:"10px"}}>
            {[...Array(5)].map((star,i)=>{
                const ratingValue=i+1;
              
            
    return (
       <label>
           <input
                className="inp-star"
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={()=>setRate(ratingValue)}
                
            />
            <FaStar
                className="star"
                color={ratingValue <= (hover || rate) ? "#ffee07" : "#e4e5e9"}
                size={25}
                onMouseEnter={()=>setHover(ratingValue)}
                onMouseLeave={()=>setHover(null)}
            />
       </label>
    )
})}
{/* <p>rating is {rating}</p> */}
        </div>
    );
};

StarRating.defaultProps={
    setRate: ()=>{},
    rate:0
}

export default StarRating
