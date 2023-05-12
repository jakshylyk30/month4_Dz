import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Link} from "react-router-dom";


const Slider = () => {
    const [photos, setPhotos] = useState([])

    const top = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])
    return (
        <div>
            <h2>Slider</h2>
            <Swiper
                className='swiper'
                autoplay={{delay: 1000, disableOnInteraction: false}}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={30}
                loop={true}
                speed={1500}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
            >
                {
                    photos.slice(0,20).map(i => <SwiperSlide className='slide'>
                        <Link onClick={top} to={`/about/${i?.id}`}>
                            <img src={i?.image} alt=""/>
                        </Link>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Slider;