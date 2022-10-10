import React from "react";
import {Col, Container, Row, Stack} from "react-bootstrap";
import {Form, Header, Results} from "./components";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {HistoryList} from "./components/HistoryList";

const NoDataMessage = () => (
    <Stack>
        <h3 style={{textAlign: "center"}}>No content to display.</h3>
        <p style={{textAlign: "center"}}>You need to make a requisition on the input above, results will be shown
            here.</p>
    </Stack>
)

const HomeView = (): any => {
    const selector = useSelector((state: RootState) => state.website.database)
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <Header/>
                </Col>
                <Col xs={12}>
                    <Form/>
                </Col>
                {
                    selector.length ? (
                        <>
                            <Col>
                                <HistoryList list={selector}/>
                            </Col>

                            <Col xs={12} lg={6}>
                                <Results/>
                            </Col>
                        </>
                    ) : (
                        <Col xs={12}>
                            <NoDataMessage/>
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
}

export default HomeView;