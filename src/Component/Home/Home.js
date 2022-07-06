import React from "react";
import { Fragment } from "react";
import Header from "./Header/Header";
import Services from "../Services/Services"
import "./Home.css"

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Services />
        </Fragment>

    )
}

export default Home;