import React, {useEffect} from "react";

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

            <img className='image-face' src='/image/face.webp' alt='Artin Abiri face'/>
            <div className='sub-text'>
                <h2> Hello there.</h2>
                <br/><br/>

                <h2>I’m Artin, obviously. And this is my portfolio.</h2>
                <br/><br/>
                <h2> I'm a Master student in  ENTREPRENEURSHIP AND BUSINESS DESIGN  </h2>
                <h2>as well as a Software Engineering at Chalmers School of Technology</h2>
            </div>
        </section>
    );
}
