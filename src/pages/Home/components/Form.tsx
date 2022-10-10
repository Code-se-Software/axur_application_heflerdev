import React, {Dispatch, EventHandler, SetStateAction, SyntheticEvent, useEffect, useState} from "react";
import {searchService} from "../../../services";
import {CheckIcon, ErrorIcon, MagnifyingGlass} from "../../../assets/icons/Icons";
import {Button, Stack} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../redux/store";
import {insertData} from "../../../redux/slices/websiteSlice";

export const Form = () => {
    const [query, setQuery]: [query: string, setQuery: Dispatch<SetStateAction<string>>] = useState("");
    const [submit, setSubmit]: [submit: string, setSubmit: Dispatch<SetStateAction<string>>] = useState("");
    const [errors, setErrors]: [errors: Array<string>, setErrors: Dispatch<SetStateAction<String[]>>] = useState([]);
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        if (submit.length > 4) {
            searchService(submit)
                .then(res => dispatch(insertData(res.id)))
        }
    }, [submit])

    function handleChange({target}: { target: any }) {
        setQuery(target.value)
    }

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()
        if (query.length > 4) {
            setSubmit(query);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Stack gap={3}>
                <div className="search-bar">
                    <div className={query.length <= 4 ? "error" : "success"}>
                        {
                            query.length <= 4 ? (<ErrorIcon/>) : (<CheckIcon/>)
                        }
                    </div>
                    <input type="text" placeholder={"Need to have 4+ letters."} onChange={handleChange} value={query}/>
                    <div className="submit" onClick={handleSubmit}>
                        <MagnifyingGlass size={28} color={"white"}/>
                    </div>
                </div>
                <Button className="submit-button" type={"submit"}>
                    <MagnifyingGlass size={28} color={"white"}/>
                </Button>
            </Stack>
        </form>
    )
}