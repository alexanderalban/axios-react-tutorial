import React from 'react';
import './/BeerCard.css';
import { useState } from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";






function  BeerCard(props) {

    const [like, setLike] = useState(false)

    const heartSwitch = () => {
        if (like === true) {
            setLike(false)
        } else if (like === false)
            setLike(true)
    }

    const { image_url, name, first_brewed, tagline, abv, description } = props

    return (
        <section>
            <li>
                <img src={image_url} alt={"beer logo"}></img>
                <h3 style={{display: "inline-block"}}>{name}, <span>{first_brewed}</span> </h3>
                <h4>{tagline}</h4>
                <p style={{display: "inline-block"}}><span>{abv} ABV. </span> {description}</p>
                <div onClick={heartSwitch} className='heart'>
                    {like === false ? (
                         <AiOutlineHeart /> 
                    ) : (
                        <AiFillHeart />
                    )}
                    </div>
                <br></br>
            </li>
        </section>
    )
}

export default BeerCard;