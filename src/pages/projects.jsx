import React from "react";
import Loadable from "react-loadable";
import "../styles/projects.scss";
import Projects from "../containers/Projects";
import {Helmet} from "react-helmet";

const ProjectsLazy = () => {
  return (
    <>
        <title>My Projects</title>
        <Helmet
            htmlAttributes={{
                lang: 'en',
            }}
        />
        <Projects />
    </>
  );
};
export default ProjectsLazy;
