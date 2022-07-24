import React, {useContext, useState} from "react";
import cn from "classnames";
import {CursorContext} from "../CustomCursor/CursorManager";
import "./style.scss";

export default function Navbar() {
    const {setSize} = useContext(CursorContext);
    const [opened, setOpen] = useState(false);
    const handleMouseEnter = () => {
        setSize("medium");
    };
    const handleMouseLeave = () => {
        setSize("small");
    };

    const toggleBurger = () => {
        setOpen(!opened);
    };

    function goHome() {
        window.location.href = "/";
    }

    function goProjects() {
        window.location.href = "/projects";
    }

    function goAbout() {
        window.location.href = "/about";
    }

    return (
        <>
            <div className="overlay-nav">
                <div className="header-container-nav">
                    <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={goHome} onKeyDown={goHome}> Artin
                        Abiri</h1>
                    <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={goAbout} onKeyDown={goAbout}>
                        About
                    </h1>
                    <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={goProjects} onKeyDown={goProjects}>
                        Projects
                    </h1>
                </div>
            </div>

            <div
                className={cn("overlay-burger-icon", {"as-opened": opened})}
                onClick={toggleBurger}
            />
            <div className={cn("overlay-burger-menu", {"as-opened": opened})}>
                <h1 onClick={goHome}>Home</h1>

                <h1 onClick={goAbout}>About</h1>
                <h1 onClick={goProjects}>Projects</h1>
            </div>
        </>
    );
}
