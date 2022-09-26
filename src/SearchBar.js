import React from "react";

const SearchBar = ({onSearchType}) => {
    return(
        <div>
            <input
                type="text" 
                placeholder="Search Droids"
                onChange={onSearchType}
            />
        </div>
    );
}

export default SearchBar