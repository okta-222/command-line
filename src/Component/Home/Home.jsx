import React from "react";
import { Fragment } from "react";
import Header from "./Header/Header";
import Services from "../Services/Services";
import Video from "../Videoo/Video";
import Sliderr from "../Slider/Slider"
import Register from "../Form/Foorm";
import Ven from "../Venn/Venue";
import Spons from "../Sponsors/Sponsors"
import Cont from "../Contact/Contact";
import "./Home.css"

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Services />
            <Video />
            <Sliderr />
            <Register />
            <Ven />
            <Spons />
            <Cont />
        </Fragment>

    )
}

export default Home;