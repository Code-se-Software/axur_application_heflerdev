import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Col, Container, Row, Stack} from "react-bootstrap";
import {resultsService} from "../../../services";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";

export const Results = () => {
    const id = useSelector((state: RootState) => state.website.data);
    const [list, setList]: [list: String[], setList: Dispatch<SetStateAction<String[] | never>>] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (id) {
            resultsService(id)
                .then(res => {
                    setList(res.urls)
                    setStatus(res.status)
                })
        }
    }, [id])

    return (
        <section>
            {
                list.length ? (
                    <Row className={"list-container"}>
                        {
                            list.map((item: string, index: number) => (
                                <Col xs={12} className={index % 2 == 0 ? "even" : "odd"}>
                                    <a href={item}>{item}</a>
                                </Col>
                            ))
                        }
                    </Row>
                ) : (
                    <div>No results to display</div>
                )
            }
        </section>
    )
}