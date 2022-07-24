import React, { useEffect } from "react";

import gsap from "gsap";
import SplitText from "../../utils/Split3.min";

import "./style.scss";

export default function AboutHeader() {
    useEffect(() => {
        const split = new SplitText("#header-text", {
            type: "lines",
            linesClass: "lineChildren",
        });

        const splitParent = new SplitText("#header-text", {
            type: "lines",
            linesClass: "lineParent",
        });

        gsap.to(split.lines, {
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power2",
        });
    }, []);

    return (
        <section className="header-container-about" data-scroll-section>

            <h1 className='header-text' id="header-text">Artin Abiri</h1>

            <img className='image-face' src='/image/face.webp' alt='image of Artin Abiri'/>
            <div className='sub-text'>
            <h2> Hello there.</h2>
                <br/><br/>

            <h2>I’m Artin, obviously. And this is my portfolio.</h2>
                <br/><br/>
                <h2> I'm a Master in Software Engineering student  </h2>
            <h2>at Chalmers with a major in Entrepreneurship and Business Design   </h2>
            </div>
        </section>
    );
}
