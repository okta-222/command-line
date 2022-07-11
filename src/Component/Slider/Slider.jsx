import React from 'react'
import card from "../../assets/planet.jpg"
import box from "../../assets/love.jpg"
import boxx from "../../assets/img1.jpg"
import boxxx from "../../assets/img2.jpg"
import boxxxx from "../../assets/img3.jpg"
import boxxxxx from "../../assets/img4.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper.min.css';
import "./Slider.css"

const data = [
    {
        id: 1,
        username: "jenny green",
        testimonial: "ui disigner"
    },
    {
        id: 2,
        username: "jenny green",
        testimonial: "ui disigner"
    },
    {
        id: 3,
        username: "jenny green",
        testimonial: "ui disigner"
    },
    {
        id: 4,
        username: "jenny green",
        testimonial: "ui disigner"
    },
    {
        id: 5,
        username: "jenny green",
        testimonial: "ui disigner"
    },
]
export default function Slider() {
    return (
        <section>
        <div className="container app">
            <Swiper
                spaceBetween={50} slidesPerView={4} className="mySwipe">
                {data.map(user => (
                    <SwiperSlide key={user.id} className="slide">
                        <div className="slide-content">
                            <div className="user-image">
                                <img src={box} className="user-photo" />
                            </div>
                            <h5>{user.username}</h5>
                            <p className="user-testimonial">{user.testimonial}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </section>

    )
}
