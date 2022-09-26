import React from "react";

const SearchBar = ({onSearchType}) => {
    return(
        <div>
            <input
                type="text" 
                placeholder="Search Robots"
                onChange={onSearchType}
            />
        </div>
    );
}

export default SearchBar