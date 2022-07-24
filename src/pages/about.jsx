import React from "react";
import Loadable from "react-loadable";

const loader = () => <div>Loading.</div>;
//
const AboutLazy = Loadable({
    loader: () => import("../containers/About"),
    loading: loader,
});

const Index = () => {
    return (
        <>

            <AboutLazy />
        </>
    );
};
export default Index;
