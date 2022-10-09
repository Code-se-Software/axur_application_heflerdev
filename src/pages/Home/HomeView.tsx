import React from "react";
import {Container} from "react-bootstrap";
import {Form, Header, Results} from "./components";

const HomeView = (): any => {
    return (
        <Container>
            <Header/>
            <Form/>
            <Results/>
        </Container>
    )
}

export default HomeView;