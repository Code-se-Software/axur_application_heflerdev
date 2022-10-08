import React, {useEffect, useState} from "react";
import {searchService} from "../../../services/SearchService";

const HomeForm = () => {
    const [query, setQuery]: [query: string, setQuery: any] = useState("");

    useEffect(() => {
        searchService(query)
            .then(res => console.log(res))
    }, [query])

    function handleChange({target}: { target: any }) {
        setQuery(target.value)
    }

    function handleSubmit() {

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="query">
                Query
                <input type="text" onChange={handleChange}/>
            </label>
        </form>
    )
}

export default HomeForm;