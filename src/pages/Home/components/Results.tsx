import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "src/redux/store";
import {resultsService} from "src/services";
import {RefreshIcon} from "src/assets/icons/Icons";

export const Results = () => {
    const id = useSelector((state: RootState) => state.website.data);
    const [list, setList]: [list: String[], setList: Dispatch<SetStateAction<String[] | never>>] = useState([])
    const [status, setStatus] = useState(null)
    const [refresh, setRefresh] = useState(0)

    useEffect(() => {
        if (id) {
            resultsService(id)
                .then(res => {
                    setList(res.urls)
                    setStatus(res.status)
                })
        }
    }, [id, refresh])

    const handleClick = () => {
        setRefresh(refresh + 1)
    }

    setTimeout(() => {
        if (status === "active") setRefresh(refresh + 1)
    }, 2000)

    return (
        <section>
            {
                list.length ? (
                    <Row className={"list-container"}>
                        <div className={status === "active" ? "active" : "done"}>
                            <div>
                                {
                                    status === "active" ? (
                                        <div className={"results-content"}>
                                            <div className={"searching"}>
                                                Still Searching ...
                                            </div>
                                            <div className={"refresh-icon"} onClick={handleClick}>
                                                <RefreshIcon width={"2rem"}/>
                                            </div>
                                        </div>
                                    ) : (
                                        <>Searching Finished</>
                                    )
                                }
                            </div>
                        </div>
                        {
                            list.map((item: string, index: number) => (
                                <Col key={item + index} xs={12} className={index % 2 == 0 ? "even" : "odd"}>
                                    <a href={item}>{item}</a>
                                </Col>
                            ))
                        }
                    </Row>
                ) : (
                    <>
                        <div className={"mt-3"}>No Results Found.</div>
                        <div></div>
                    </>

                )
            }
        </section>
    )
}