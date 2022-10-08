import React from "react";

const HomeForm = () => {
    function handleChange() {

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