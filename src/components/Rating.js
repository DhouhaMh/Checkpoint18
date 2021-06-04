import React from 'react'
// import {FaStar} from 'react-icons/fa'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
// import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'


const Rating = ({rate, setRate}) => {

    const array=(x)=>{
        
        let star=[]
        for(let i=1; i<=5; i++){

            if(i<=x){
                star.push(
                    //1st Method
                    <FontAwesomeIcon icon={fasFaStar} color={"yellow"} className="star" onClick={()=>setRate(i)}/>

                    //2nd Method
                    // <FaStar color={"yellow"} size={25} className="star" onClick={()=>setRate(i)}/>

                    //3rd Method
                    // <span style={{color:"yellow", cursor:"pointer", fontSize:"200%"}} onClick={()=>setRate(i)}>
                    //     <FontAwesomeIcon icon={fasFaStar}/>
                    // </span>
                )
            }
            else{
                star.push(
                    //1st Method
                    <FontAwesomeIcon icon={fasFaStar} color={"#e4e5e9"} className="star" onClick={()=>setRate(i)}/>

                    //2nd Method
                    // <FaStar color={"#e4e5e9"} size={25} className="star" onClick={()=>setRate(i)}/>
                    
                    //3rd Method
                    // <span style={{color:"#e4e5e9", cursor:"pointer", fontSize:"200%"}} onClick={()=>setRate(i)}>
                    //     <FontAwesomeIcon icon={farFaStar}/>
                    // </span>
                )
            }
        }
        return star
    }
    return (
        <div>
            {array(rate)}
        </div>
    )
}
Rating.defaultProps={
    setRate: ()=>{},
    rate:0
}

export default Rating
