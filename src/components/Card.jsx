import React from "react";
// import myImage from "../assets/person1.png" ;
import star from "../assets/Star.png" ; 

function Card(props){
    return (
    <div className="card-container">
        <div className="card-image">
            <img src={props.img} alt="cards" />
        </div>
        <div className="rating">
            <img src={star} />
            <p>{props.rating} 
            <span>({props.upvotes}).USA</span></p>
        </div>
        <div className="about">                                                                                                                                                                                                                                 
            <p>{props.des}</p>
        </div>
        <div className="pricing">
            <p>From ${props.price} <span>/ person</span></p>
        </div>
    </div>
    )

};

export default Card ;