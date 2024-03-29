import React, {Dispatch, SetStateAction, SyntheticEvent, useEffect, useState} from "react";
import {searchService} from "src/services";
import {CheckIcon, ErrorIcon, MagnifyingGlass} from "src/assets/icons/Icons";
import {Button, Stack} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {AppDispatch} from "src/redux/store";
import {insertData} from "src/redux/slices/websiteSlice";

export const Form = () => {
    const [query, setQuery]: [query: string, setQuery: Dispatch<SetStateAction<string>>] = useState("");
    const [submit, setSubmit]: [submit: string, setSubmit: Dispatch<SetStateAction<string>>] = useState("");
    const [errors, setErrors]: [errors: Array<string>, setErrors: Dispatch<SetStateAction<String[]>>] = useState([]);
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        if (submit.length > 4) {
            searchService(submit)
                .then(res => dispatch(insertData({id: res.id, keyword: submit})))
        }
    }, [submit])

    function handleChange({target}: { target: any }) {
        setQuery(target.value)
    }

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()
        if (query.length > 4 && query.length <= 32) {
            setSubmit(query);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Stack gap={3}>
                <div className="search-bar">
                    <div className={query.length <= 4 ? "error" : "success"}>
                        {
                            query.length <= 4 ? (<ErrorIcon height={30}/>) : (<CheckIcon height={30}/>)
                        }
                    </div>
                    <input type="text" placeholder={"Need to have 4+ letters."} onChange={handleChange} value={query}/>
                    <div className="submit" onClick={handleSubmit}>
                        <MagnifyingGlass width={28}/>
                    </div>
                </div>
                <Button className="submit-button" type={"submit"}>
                    <MagnifyingGlass width={28}/>
                </Button>
            </Stack>
        </form>
    )
}