import React, {useEffect, useRef, useState} from "react";
import ProjectItem from "../components/ProjectItem";
import CustomCursor from "../components/CustomCursor";
import CursorManager from "../components/CustomCursor/CursorManager";
import {pageData} from "../data2";

import Navbar from "../components/Navbar";
import FooterScroll from "../components/FooterScroll";

let WindowSize;
if (typeof window !== `undefined`) {
    WindowSize = {width: window.innerWidth, height: window.innerHeight};
} else {
    WindowSize = {width: 1980, height: 1080};
}

export default function Projects() {

    const menuItems = useRef(null);
    const [renderItems, setRenderItems] = useState(pageData);

    const cloneItems = () => {
        // Get the height of one menu item
        const itemHeight = menuItems.current.childNodes[0].offsetHeight;
        // How many items fit in the window?
        const fitIn = Math.ceil(WindowSize.height / itemHeight);
        // Create [fitIn] clones from the beginning of the list
        console.log(renderItems)
        // Add clones
        const clonedItems = [...renderItems]
        console.log(clonedItems);
        clonedItems.push(...clonedItems)
        clonedItems.push(...clonedItems)
        clonedItems.push(...clonedItems)
        clonedItems.push(...clonedItems)
        clonedItems.push(...clonedItems)
        clonedItems.push(...clonedItems)

        console.log(clonedItems.length)

        // All clones height

        setRenderItems([...renderItems, ...clonedItems]);
        return clonedItems.length * itemHeight;
    };



    const getScrollPos = () => {
        return ((menuItems.current.pageYOffset || menuItems.current.scrollTop) - (menuItems.current.clientTop || 0));
    };
    const setScrollPos = (pos) => {
        menuItems.current.scrollTop = pos;
    };

    const initScroll = () => {
        // Scroll 1 pixel to allow upwards scrolling
        const scrollPos = getScrollPos();
        if (scrollPos <= 0) {
            setScrollPos(1);
        }
    };

    useEffect(() => {
        const clonesHeight = cloneItems();
        initScroll();
        menuItems.current.style.scrollBehavior = "unset";

        const scrollUpdate = () => {
            const scrollPos = getScrollPos();

            if (clonesHeight + scrollPos >= menuItems.current.scrollHeight) {
                // menuItems.current.style.scrollBehavior = "unset";
                // Scroll to the top when you’ve reached the bottom
                setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
                // menuItems.current.style.scrollBehavior = "smooth";
            } else if (scrollPos <= 0) {
                // Scroll to the bottom when you reach the top
                setScrollPos(menuItems.current.scrollHeight - clonesHeight);
                // menuItems.current.style.scrollBehavior = "smooth";
            }
        };

        menuItems.current.addEventListener("scroll", scrollUpdate);

        return () => {
            menuItems.current.removeEventListener("scroll", scrollUpdate);
        };
    }, []);

    return (
        <CursorManager>
        <CustomCursor/>

        <Navbar/>
        <div className="main-container" id="main-container">

            <ul className='ul' ref={menuItems}>
                {renderItems.map((project, index) => (
                    <ProjectItem key={index} project={project} itemIndex={index}/>))}
            </ul>
        </div>
        <FooterScroll/>
    </CursorManager>);
}
