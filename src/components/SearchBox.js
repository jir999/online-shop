import React from "react";

const SearchBox = () => {
    const handleInputChange = (e) => {
        const { value } = e.target;
    }
    return (
        <input onChange={(e) => handleInputChange(e)} placeholder="Search" />
    )
};

export default SearchBox;