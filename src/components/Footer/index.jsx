import React from "react";

import "./style.scss";


export default function Footer() {


    return (
        <section className="footer" data-scroll-section>
            <div>
                <br/>
                <h5 style={{fontSize: '20px', color: 'black', marginTop: '70px'}}>
                    artinabiri
                </h5>
                <h6 style={{color: "#0765b6", marginTop: '10px'}}>
                    Around the web
                </h6>

                <div style={{marginTop: '10vh'}}>
                    <img src='/image/github.webp' className='footerButton'
                         onClick={() => window.open("https://github.com/ArtinAbiri", "_blank")} alt="github_logo" onKeyDown={() => window.open("https://github.com/ArtinAbiri", "_blank")}/>
                    <img src='/image/linkedin.webp' className='footerButton'
                         onClick={() => window.open("https://www.linkedin.com/in/artinabiri/", "_blank")}
                         alt='linkedin_logo' onKeyDown={() => window.open("https://www.linkedin.com/in/artinabiri/", "_blank")} />

                    <br/>
                    <br/>
                    <br/>
                    <p className='bottomfoot' onClick={() => window.location = 'mailto: kevinabiri@gmail.com'} onKeyDown={() => window.location = 'mailto: kevinabiri@gmail.com'}>
                        Email: Kevinabiri@gmail.com
                    </p>
                    <p className='bottomfoot' onClick={() => window.location = 'tel:+46725555510'} onKeyDown={() => window.location = 'tel:+46725555510'}>
                        Phone: +46725555510</p>
                </div>
            </div>
        </section>
    );
}
