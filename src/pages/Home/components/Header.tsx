import React from "react";
import {Container, Stack} from "react-bootstrap";
import {UnicornIcon} from "../../../assets/icons/Icons";

export const Header = () => (
    <Container>
        <Stack className={"home-header"}>
            <div className={"icon"}><UnicornIcon size={78}/></div>
            <div className={"text"}>UniSearcher</div>
        </Stack>
    </Container>
)