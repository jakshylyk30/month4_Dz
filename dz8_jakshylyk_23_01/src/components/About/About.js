import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import {Button} from "@mui/material";
import Slider from "../Slider/Slider";

const About = () => {
    const [list, setList] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    const back = () => navigate(-1)


    const getProducts = async () => {
        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
        return setList(data)
    }

    useEffect(() => {
        getProducts()
    }, [id])
    return (
        <div className='about'>
            <Button onClick={back}>back</Button>
            <div className="img">
                <img src={list?.image} alt=""/>
            </div>
            <h2>{list?.title}</h2>
            <p>{list?.description}</p>
            <div className="dir">
                <Slider/>
            </div>
        </div>
    );
};

export default About;