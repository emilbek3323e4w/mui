import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import {originalPath, smallPath} from "../services";

const Carousel = ({ movies }) => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <div style={{
                            position: 'relative', // Ensure positioning for the overlay and blur
                            padding: '30px',
                            display: "flex",
                            justifyContent: 'space-between',
                            marginBottom: '30px'
                        }}>
                            {/* Background image with blur */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: `url(${originalPath + movie.backdrop_path}) no-repeat center/cover`,
                                filter: 'blur(2px)', // Apply blur effect
                                zIndex: 0 // Ensure it's behind the content
                            }}></div>

                            {/* Dark overlay */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
                                zIndex: 1 // Overlay on top of the blurred background
                            }}></div>

                            {/* Content */}
                            <div style={{ zIndex: 2 }}> {/* Content above the background and overlay */}
                                <img src={smallPath + movie.poster_path} alt=""/>
                            </div>
                            <div style={{ zIndex: 2 }}>
                                <h1 style={{color:'#fff', textAlign:'center', marginTop: '80px'}}>{movie.title}</h1>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
