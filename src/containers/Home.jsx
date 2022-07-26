import React, {useEffect, useRef, useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Featured from "../components/Featured";
import About from "../components/About";
import useLocoScroll from "../hooks/useLocoScroll";

import "../styles/home.scss";
import Knowlage from "../components/Knowlage";

const Home = () => {
    const ref = useRef(null);
    const [preloader, setPreload] = useState(true);


    useLocoScroll(!preloader);

    useEffect(() => {
        if (!preloader && ref) {
            if (typeof window === "undefined" || !window.document) {

            }
        }
    }, [preloader]);

    const [timer, setTimer] = React.useState(4);

    const id = React.useRef(null);

    const clear = () => {
        window.clearInterval(id.current);
        setPreload(false);
    };

    React.useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer((time) => time - 1);
        }, 1000);
        return () => clear();
    }, []);

    React.useEffect(() => {
        if (timer === 0) {
            clear();
        }
    }, [timer]);

    if (typeof window === "undefined" || !window.document) {
        return null;
    }

    return (
        <>
            {preloader ? (
                <div className="loader-wrapper absolute">
                    <h2>Artin Abiri</h2>
                    <h1>Portfolio</h1>
                </div>
            ) : (
                <div
                    className="main-container"
                    id="main-container"
                    data-scroll-container
                    ref={ref}
                >
                    <Navbar/>
                    <Header/>
                    <Featured/>
                    <About/>
                    <Knowlage/>
                    <Footer/>
                </div>
            )}
        </>

    );
};
export default Home;
