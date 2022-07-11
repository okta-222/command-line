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
import Footer from "../Footer/Footer";
import "./Home.css"
import Tslider from "../Tslider/Tslider";

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Services />
            <Video />
            <Tslider />
            <Sliderr />
            <Register />
            <Ven />
            <Spons />
            <Cont />
            <Footer />
        </Fragment>

    )
}

export default Home;