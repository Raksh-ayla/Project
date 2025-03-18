import React from "react";
import Hero from "../components/Hero";
import Run from "../components/Run";
import Departments from "../components/Departments";
import Benifits from "../components/Benifits";
import Partners from "../components/Partners";

import Map from "../components/Map";

const Home: React.FC = () => {
    return (
        <div>
            <Hero />
            <Run />
            <Departments />
            <Benifits />
            <Partners />
            <Map />
        </div>
    );
};

export default Home;
