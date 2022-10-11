import React from "react";
import {Col, Container, Row, Stack} from "react-bootstrap";
import {Form, Header, Results} from "./components";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {HistoryList} from "./components/HistoryList";
import {NullIcon} from "../../assets/icons/Icons";

const NoDataMessage = () => (
    <Stack gap={2} className="data-message">
        <div className={"icon"}><NullIcon width={200}/></div>
        <p className={"text"}>No content to display</p>
        <p>To create a new Request, type a keyword on the searchbar above.</p>
    </Stack>
)

const HomeView = (): any => {
    const selector = useSelector((state: RootState) => state.website.database)
    return (
        <Container className={"homeview-container"}>
            <Stack className={"content"}>
                <Row className={"justify-content-center"}>
                    <Col xs={12}>
                        <Header/>
                    </Col>
                    <Col xs={12} md={8} lg={7}>
                        <Form/>
                    </Col>
                    {
                        selector.length ? (
                            <>
                                <Col xs={12} md={6}>
                                    <HistoryList list={selector}/>
                                </Col>

                                <Col xs={12} md={6}>
                                    <Results/>
                                </Col>
                            </>
                        ) : (
                            <Col xs={12} className={"container"}>
                                <NoDataMessage/>
                            </Col>
                        )
                    }
                </Row>
            </Stack>
        </Container>
    )
}

export default HomeView;