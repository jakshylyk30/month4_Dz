import React from 'react';
import Buttons from "../Buttons/Buttons";
import {Link} from "react-router-dom";

const Card = ({i}) => {
    return (
        <li>
            <Link to={`/about/${i?.id}`}>
                <img src={i?.image} alt=""/>
                {/*<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/51.png" alt=""/>*/}
                <h2>{i?.title.substring(0, 40)}...</h2>
                <span>Rating: {i?.rating?.rate}</span>
                <Link to={`/about/${i?.id}`}>
                    <Buttons>click</Buttons>
                </Link>
            </Link>
        </li>
    );
};

export default Card;