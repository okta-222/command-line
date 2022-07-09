import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import card from "../../assets/planet.jpg"



const Sliderr = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <section className="Slider">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>Creative Speakers</h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
                    </div>
                </div>



                <Slider {...settings}>
                    <div>
                        <div className="row">
                            <img src={card} title="hi" />
                        </div>
                    </div>
                    <div>
                        <div className="row">
                        </div>
                    </div>
                    <div>
                        <div className="row">
                        </div>
                    </div>
                    <div>
                        <div className="row">
                        </div>
                    </div>
                    <div>
                        <div className="row">
                        </div>
                    </div>
                </Slider>

            </div>
        </section>

    )
}

export default Slider;