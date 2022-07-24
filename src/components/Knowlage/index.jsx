import React from "react";
import './style.scss';
import SectionHeader from "../SectionHeader";

export default function Knowlage() {
    function goProjects() {
        window.location.href = "/projects";
    }
    function goAbout() {
        window.location.href = "/about";
    }
    return (<section>
        <SectionHeader title="Information"/>
        <div className='know-info' data-scroll-section>
            <div>
                <h1>Skills</h1>
                <ul className='ul'>
                    <li>
                        Project Management
                    </li>
                    <li>
                        Business Development
                    </li>
                    <li>
                        Product Management
                    </li>
                    <li>
                        ReactJS
                    </li>

                    <li>
                        SQL
                    </li>
                    <li >
                        <a className="animated-arrow" onClick={goAbout} style={{cursor: 'pointer'}} onKeyDown={goAbout}>
                            <span className="the-arrow -left">
                                 <span className="shaft"></span>
                             </span>
                            <span className="main">
                             <span className="text">
                              Read More
                             </span>
                               <span className="the-arrow -right">
                            <span className="shaft"></span>
                        </span>
                        </span>
                        </a>
                    </li>
                </ul>

            </div>
            <div>
                <h1> Projects</h1>
                <ul className='ul'>
                    <li>
                        Pharmvia
                    </li>
                    <li>
                        Kävlinge Kommun
                    </li>
                    <li>
                        H&W Innovations
                    </li>
                    <li>
                        Folkes
                    </li>
                    <li>
                        NSO
                    </li>
                    <li >
                        <a className="animated-arrow" onClick={goProjects}  style={{cursor: 'pointer'}}>
                            <span className="the-arrow -left">
                                 <span className="shaft"></span>
                             </span>
                            <span className="main">
                             <span className="text">
                              See More
                             </span>
                               <span className="the-arrow -right">
                            <span className="shaft"></span>
                        </span>
                        </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>)
}
