import React from "react";

const Card = ({ id, name, email }) => {
    // const { id, name, email } = props;
    return(
        <div className="bg-light-green dib tc br3 pa3 ma2 grow shadow-5">
            <img alt="unable to load" src={`https://robohash.org/${id}`} />
            <h2>{name}</h2>
            <h3>{email}</h3>
        </div>
    );
}

export default Card;