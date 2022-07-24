import React, {useEffect, useRef, useState} from "react";
import cn from "classnames";

import SectionHeader from "../SectionHeader";

import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import useOnScreen from "../../hooks/useOnScreen";

import "./style.scss";

export default function About() {
    const ref = useRef(null);

    const [reveal, setReveal] = useState(false);
    const onScreen = useOnScreen(ref);

    useEffect(() => {
        if (onScreen) setReveal(onScreen);
    }, [onScreen]);

    useEffect(() => {
        if (reveal) {
            const split = new SplitText("#headline", {type: "lines"});

            gsap.to(split.lines, {
                duration: 1, y: -20, opacity: 1, stagger: 0.1, ease: "power4.out", // onComplete: () => split.revert(),
            });
        }
    }, [reveal]);

    function goAbout() {
        window.location.href = "/about";
    }

    return (<section
            className={cn("about-section", {"is-reveal": reveal})}
            data-scroll-section
        >
            <SectionHeader title="about"/>
            <div className='flex-about'>
                <div>
                    <p ref={ref} id="headline" className={cn({"is-reveal": reveal})}>
                        Hi! I'm Artin and I'm a business developer, project manager and web developer based in
                        Gothenburg.
                        Currently finishing my Engineering master in Tech based Business Development and
                        Entrepreneurship at Chalmers University of Technology.

                    </p>
                    <button className='button' onClick={goAbout}>
                        More about me
                    </button>
                </div>
                <img src={'/image/train.gif'} alt='gif of a metro going though walls'/>
            </div>
        </section>);
}
