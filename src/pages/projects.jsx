import React from "react";
import Loadable from "react-loadable";
import "../styles/projects.scss";
import Projects from "../containers/Projects";

const ProjectsLazy = () => {
  return (
    <>
      <Projects />
    </>
  );
};
export default ProjectsLazy;
