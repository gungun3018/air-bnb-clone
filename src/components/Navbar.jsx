import React from "react";
import myImage from "../assets/airbnb.png" ;

function Navbar(){
    return (
        <div className="nav" >
            <img className ="nav-photo" src={myImage} alt ="logo" />
        </div>
    )
}

export default Navbar ;