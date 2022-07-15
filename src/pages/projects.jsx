import React from "react";
import Loadable from "react-loadable";
import "../styles/home.scss";
import Navbar from "../components/Navbar";

const loader = () => <div>Loading.</div>;
//
const ProjectLazy = Loadable({
    loader: () => import("../containers/Projects"),
    loading: loader,
});

const Index = () => {
    return (
        <>
            <ProjectLazy />
        </>
    );
};
export default Index;