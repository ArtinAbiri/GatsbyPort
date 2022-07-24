import React from "react";
import AboutHeader from "../components/AboutHeader";
import "../styles/home.scss";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {Helmet} from "react-helmet";

const About = () => {
    return (
        <div
            className="main-container"
            data-scroll-container
        >

            <Navbar/>
                <AboutHeader/>
                <Skills/>
                <Footer/>
        </div>

    )
}
export default About;
