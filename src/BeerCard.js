import React from 'react';
import './/BeerCard.css'
function  BeerCard(props) {
    const { image_url, name, first_brewed, tagline, abv, description } = props
    return (
        <section>
            <li>
                <img src={image_url} alt={"beer logo"}></img>
                <h3>{name} <span>{first_brewed}</span> </h3>
                <h4>{tagline}</h4>
                <p><span>{abv}</span> {description}</p>
                <br></br>
            </li>
        </section>
    )
}

export default BeerCard;