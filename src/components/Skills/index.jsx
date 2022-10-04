import React from 'react'
import './style.scss';


export default function Skills() {

    return (
        <div className='Skill-container' data-scroll-section>
            <div className='Skill-div' data-scroll>
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
                        Venture strategy
                    </li>
                    <li className='Skills-li'>
                        Product Management
                    </li>
                    <li className='Skills-li'>
                        Business Startup
                    </li>
                </ul>
            </div>

            <div style={{backgroundColor: '#d9d9d9'}} className='Skill-div' data-scroll>
            <h1 className='Skill-TitleIP'>
                Intelectual Property Strategy
            </h1>
            <h2 className='Skill-sub'>
                Intellectual assets and property management in innovation and business strategy. With a
                particular emphasis is on technology-based innovation and the use of patents and other IPRs to
                support technology-based business
            </h2>
            <ul className='Skills'>
                <li className='Skills-li'>
                    Patent strategy
                </li>
                <li className='Skills-li'>
                    PCT application
                </li>
                <li className='Skills-li'>
                    EPO patent strategy
                </li>
                <li className='Skills-li'>
                    Intellectual Assets management
                </li>
                <li className='Skills-li'>
                    Risk management
                </li>
                <li className='Skills-li'>
                    IP, IA and IPS
                </li>
            </ul>
        </div>


        <div className='Skill-div' data-scroll>
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
        <div style={{backgroundColor: '#d9d9d9'}} className='Skill-div' data-scroll>
            <h1 className='Skill-Title3'>
                Who am I?
            </h1>
            <h2 className='Skill-sub'>
                A happy entrepreneur, a curious student, a passionate developer and a creative thinker. I am a creative thinker with new ideas and sprawling with idea, thoughts and new innovations.
                My passions lies in business development as I love to see ideas come to life and be able to shape them into the best product
                possible. Outside work I am just a normal guy hanging out with with my friends and family, exercise and try to have the best life
                possible
            </h2>
            <ul className='Skills3'>
                <li className='Skills-li'>
                    Business Developer
                </li>
                <li className='Skills-li'>
                    Entrepreneur
                </li>
                <li className='Skills-li'>
                    Creative Thinker
                </li>
                <li className='Skills-li'>
                    Hard Working
                </li>
                <li className='Skills-li'>
Tech Nerd                </li>
                <li className='Skills-li'>
                    Just a happy guy
                </li>

            </ul>
        </div>
    </div>)
}
