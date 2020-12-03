import React from "react";
import Header from './../components/Header';
import About from "../components/About";
import Mission from "./../components/Mission";
import Boost from "../components/Boost";
import Card from "../components/Card";
const Home = () => {

    return (
        <main className={"main-home"}>
            <Header />
            <About />
            <Mission />
            <Boost />
            <Card />
        </main>
    )
}

export default Home;