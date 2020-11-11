import React from "react";
import Header from './../components/Header';
import About from "../components/About";
import Mission from "./../components/Mission";
const Home = () => {

    return (
        <main className={"main-home"}>
            <Header />
            <About />
            <Mission />
        </main>
    )
}

export default Home;