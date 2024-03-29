import React from "react";
import {Container, Stack} from "react-bootstrap";
import {UnicornIcon} from "../assets/icons/Icons";

export const Header = () => (
    <Container>
        <Stack className={"home-header"}>
            <div className={"icon"}><UnicornIcon width={78}/></div>
            <div className={"text"}>UniCrawler</div>
        </Stack>
    </Container>
)