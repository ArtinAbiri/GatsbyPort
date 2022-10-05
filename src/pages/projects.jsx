import React from "react";
import "../styles/projects.scss";
import Projects from "../containers/Projects";
import {Helmet} from "react-helmet";
import {SEO} from "../components/SEO/SEO";

const ProjectsLazy = () => {
    return (
        <>
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
