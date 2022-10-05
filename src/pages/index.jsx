import React from "react";
import Loadable from "react-loadable";
import "../styles/home.scss";
import {Helmet} from "react-helmet";
import {SEO} from "../components/SEO/SEO";


const loader = () => <div>Loading.</div>;
//
const HomeLazy = Loadable({
  loader: () => import("../containers/Home"),
  loading: loader,
});

const Index = () => {

  return (
    <>
      <Helmet
          htmlAttributes={{
            lang: 'en',
          }}
      />
        <title>Artin Abiri Home</title>

        <HomeLazy />
    </>
  );
};
export default Index;
export const Head = () => (
    <SEO/>
)
