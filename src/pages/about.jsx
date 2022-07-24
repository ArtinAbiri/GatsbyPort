import React from "react";
import Loadable from "react-loadable";
import {Helmet} from "react-helmet";
import {SEO} from "../components/SEO/SEO";

const loader = () => <div>Loading.</div>;
//
const AboutLazy = Loadable({
    loader: () => import("../containers/About"), loading: loader,
});

const Index = () => {
    return (<>
            <title>About Me</title>
            <Helmet
                htmlAttributes={{
                    lang: 'en',
                }}
            />

            <AboutLazy/>
        </>);
};
export default Index;

export const Head = () => (<SEO title="About Me"
                                description='A description of who Artin Abiri is and what experiences i have. As well as how i can help you and your company'/>)
