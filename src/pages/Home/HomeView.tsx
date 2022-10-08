import React from "react";
import {Container} from "react-bootstrap";
import HomeHeader from "./components/HomeHeader";
import HomeForm from "./components/HomeForm";

const HomeView = (): any => {
    return (
        <Container>
            <HomeHeader/>
            <HomeForm/>
        </Container>
    )
}

export default HomeView;