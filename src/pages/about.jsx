import React from "react";
import Loadable from "react-loadable";
import {Helmet} from "react-helmet";

const loader = () => <div>Loading.</div>;
//
const AboutLazy = Loadable({
    loader: () => import("../containers/About"),
    loading: loader,
});

const Index = () => {
    return (
        <>
            <title>About Me</title>
            <Helmet
                htmlAttributes={{
                    lang: 'en',
                }}
            />

            <AboutLazy />
        </>
    );
};
export default Index;
