import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from "../Card/Card";
import Slider from "../Slider/Slider";

const Cards = () => {
    const [list, setList] = useState([])

    const getProducts = async () => {
        const {data} = await axios.get(`https://fakestoreapi.com/products`)
        return setList(data)
    }

    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div>
            <div className="container">
                <ul>
                    {
                        list.map(i => <Card i={i}/>)
                    }
                </ul>
            </div>
            <Slider/>
        </div>
    );
};

export default Cards;