import React from "react";
import "../styles/projects.scss";
import Projects from "../containers/Projects";
import {Helmet} from "react-helmet";
import {SEO} from "../components/SEO/SEO";

const ProjectsLazy = () => {
    return (
        <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-K1316HBFYF"/>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());

                gtag('config', 'G-K1316HBFYF');
            </script>
            <title>My Projects</title>
            <Helmet
                htmlAttributes={{
                    lang: 'en',
                }}
            />
            <Projects/>
        </>
    );
};
export default ProjectsLazy;

export const Head = () => (
    <SEO title="My Projects" description='My personal portfolio of projects that i have been a part of'/>
)
