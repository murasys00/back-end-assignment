import React from "react";

function Card({title, description, imageurl}){
        return(
            <div className="card">
                <img src={imageurl} alt={title} width={50}  />
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        );
}

export default Card;