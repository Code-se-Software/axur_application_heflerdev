import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {resultsService} from "../../../services";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";

export const Results = () => {
    const id = useSelector((state: RootState) => state.website.data);
    const [list, setList]: [list: String[], setList: Dispatch<SetStateAction<String[] | never>>] = useState([])
    console.log(id)

    useEffect(() => {
        console.log(id)
        if (id) {
            resultsService(id)
                .then(res => console.log(res))
        }
    }, [id])

    return (
        <Container>

        </Container>
    )
}