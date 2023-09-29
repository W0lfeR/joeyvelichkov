import React, { useEffect, useRef } from "react";
import Image from 'next/image';
import Myself from "../public/img/aboutme/Joey.jpg"
import Kingsofstrength from "../public/img/projects/Kingsofstrengthlogo.png"
import EXEShishaClub from "../public/img/projects/exeshishaclub.jpg"

const OfficalHomepage = () => {

    return (
        <>
            <section className="joey-homepage" id="/">
                <div className="container-space">
                    <section className="joey-homepage-wrap">
                        <section className="joey-homepage-content">
                            <h1>[&apos;IT&apos;, &apos;ENTREPRENEUR&apos;]</h1>
                        </section>
                    </section>
                </div>
            </section>

            <section className="joey-aboutme" id="aboutme">
                <div className="container-space">
                    <section className="joey-aboutme-content">
                        <div className="joey-aboutme-header">
                            <h1 className="joey-aboutme-title">About me</h1>
                            <p className="joey-aboutme-description">
                                <br></br>
                                <br></br>
                                IT / Cybersecurity / Web Dev
                                <br></br>
                                <br></br>
                                Deep House Lover
                            </p>
                        </div>

                        <div className="joey-aboutme-image"><Image src={Myself} alt="me" /></div>
                    </section>
                </div>
            </section>

            <section className="joey-projects" id="projects">
                <div className="container-space">
                    <section className="joey-projects-content">
                        <div className="joey-projects-content-heading">
                            <h2 className="joey-projects-content-text">Projects</h2>
                        </div>

                        <div className="joey-projects-content-actualprojects">

                            <div className="joey-projects-content-actualprojects-box">
                                <div className="joey-projects-content-actualprojects-insidebox">
                                    <a href="https://w0lfer.github.io/kingsofstrength/">
                                        {/* <img src={Kingsofstrength} className="joey-projects-content-actualprojects-images" alt="Kingsofstrength" /> */}
                                        <Image src={Kingsofstrength} className="joey-projects-content-actualprojects-images" alt="Kingsofstrength" />
                                    </a>
                                </div>
                            </div>


                            <div className="joey-projects-content-actualprojects-box">
                                <div className="joey-projects-content-actualprojects-insidebox">
                                    <a href="https://w0lfer.github.io/shishaloungeclub/">
                                        {/* <img src={EXEShishaClub} className="joey-projects-content-actualprojects-images" alt="EXEShishaClub" /> */}
                                        <Image src={EXEShishaClub} className="joey-projects-content-actualprojects-images" alt="EXEShishaClub" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};

export default OfficalHomepage;

