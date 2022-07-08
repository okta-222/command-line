import React from "react";
import { Fragment } from "react";
import Header from "./Header/Header";
import Services from "../Services/Services";
import Video from "../Videoo/Video";
import Sliderr from "../Slider/Slider"
import Register from "../Form/Foorm";
import "./Home.css"

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Services />
            <Video />
            <Sliderr />
            <Register />
        </Fragment>

    )
}

export default Home;