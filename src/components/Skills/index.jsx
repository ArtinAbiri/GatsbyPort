import React from 'react'
import './style.scss';


export default function Skills() {

    return (
        <div className='Skill-container' data-scroll-section >
        <div className='Skill-div'  data-scroll >
            <h1 className='Skill-Title'>
                Management
            </h1>
            <h2 className='Skill-sub'>
                We work together, I don't believe in the "boss and worker" dynamic when managing. Instead we work in
                a colleague-to-colleague synergy where we discuss, contrast and develop together to get the best
                product possible delivered.
            </h2>
            <ul className='Skills'>
                <li className='Skills-li'>
                    Project Management
                </li>
                <li className='Skills-li'>
                    Business Analysis
                </li>
                <li className='Skills-li'>
                    Business Development
                </li>
                <li className='Skills-li'>
                    Team Leading
                </li>
                <li className='Skills-li'>
                    Product Management
                </li>
                <li className='Skills-li'>
                    Business Intelligence
                </li>
            </ul>
        </div>

        <div style={{backgroundColor: '#acacac'}} className='Skill-div' data-scroll>
            <h1 className='Skill-Title2'>
                Technical
            </h1>
            <h2 className='Skill-sub'>
                The digital landscape is quickly changing from day to day businesses cannot afford to be slow
                and ignore the changes. With new technologies and ideas emerging every year it can be difficult to stay
                up to date.
                Therefore i utilize the latest and greatest technologies to create the best digital experience
                possible.
            </h2>
            <ul className='Skills2'>
                <li className='Skills-li'>
                    ReactJS
                </li>
                <li className='Skills-li'>
                    CSS & SASS
                </li>
                <li className='Skills-li'>
                    JavaScript
                </li>
                <li className='Skills-li'>
                    Team Leading
                </li>
                <li className='Skills-li'>
                    NextJS
                </li>
                <li className='Skills-li'>
                    Gatsby
                </li>
                <li className='Skills-li'>
                    Java (multi thread)
                </li>
                <li className='Skills-li'>
                    Python

                </li>
                <li className='Skills-li'>
                    PostgreSQL
                </li>
                <li className='Skills-li'>
                    Erlang
                </li>
            </ul>
        </div>
        <div className='Skill-div' data-scroll>
            <h1 className='Skill-Title3'>
                For Fun
            </h1>
            <h2 className='Skill-sub'>
                Just a casual happy guy who likes to play with new technologies and ideas. I bring a lot of energy and
                I'm sprawling with idea, thoughts and new innovations. My passions lies in management, and business
                development as I love to see ideas come to life and be able to shape them into the best product
                possible. Outside work I just hang with my friends and family, exercise and try to have the best life
                possible
            </h2>
            <h3 className='Skill-sub'>This felt too empty so here you have some random words from the dictionary:</h3>
            <ul className='Skills3'>
                <li className='Skills-li'>
                    Limicolous (Living in mud)
                </li>
                <li className='Skills-li'>
                    Morology (Nonsense)
                </li>
                <li className='Skills-li'>
                    Germanophilia (Like German)
                </li>
                <li className='Skills-li'>
                    Isonomy (Equality to the law)
                </li>
                <li className='Skills-li'>
                    Fulvous (Reddish Yellow)
                </li>
                <li className='Skills-li'>
                    Quop (To pulsate)
                </li>

            </ul>
        </div>
    </div>)
}
