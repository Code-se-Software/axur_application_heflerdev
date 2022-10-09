import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {searchService} from "../../../services/SearchService";
import {MagnifyingGlass} from "../../../assets/icons/Icons";
import {Button, Stack} from "react-bootstrap";

const HomeForm = () => {
    const [query, setQuery]: [query: string, setQuery: Dispatch<SetStateAction<string>>] = useState("");
    const [submit, setSubmit]: [submit: string, setSubmit: Dispatch<SetStateAction<string>>] = useState("abcde");
    const [errors, setErrors]: [errors: Array<string>, setErrors: Dispatch<SetStateAction<String[]>>] = useState([]);

    useEffect(() => {
        searchService(submit)
            .then(res => console.log(res))
    }, [submit])

    function handleChange({target}: { target: any }) {
        setQuery(target.value)
    }

    function handleSubmit() {
        if (query.length > 4) {
            setSubmit(query);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Stack gap={3}>
                <div className="search-bar">
                    <input type="text" onChange={handleChange} value={query}/>
                    <div className="submit">
                        <MagnifyingGlass size={28} color={"white"}/>
                    </div>
                </div>
                <Button className="submit-button">
                    <MagnifyingGlass size={28} color={"white"}/>
                </Button>
            </Stack>
        </form>
    )
}

export default HomeForm;