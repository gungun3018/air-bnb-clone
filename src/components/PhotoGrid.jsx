import React from "react";

import myImage from "../assets/photo-grid.png" ;

// import myImage1 from "../assets/image1.png" ;
// import myImage2 from "../assets/image2.png" ;
// import myImage3 from "../assets/image3.png" ;
// import myImage4 from "../assets/image4.png" ;
// import myImage5 from "../assets/image5.png" ;
// import myImage6 from "../assets/image6.png" ;
// import myImage7 from "../assets/image7.png" ;
// import myImage8 from "../assets/image8.png" ;
// import myImage9 from "../assets/image9.png" ;

// const images = [];

// for (let i = 1; i < 10; i++) {
//   const importStatement = import(`../assets/image${i}.png`);
//   images.push(importStatement);
// }


function PhotoGrid(){
    return (
        <div>
            <img className ="photo-grid" src ={myImage} alt = "photogrid" />
            {/* <img src ={myImage1} alt = "photogrid" />
            <img src ={myImage2} alt = "photogrid" />
            <img src ={myImage3} alt = "photogrid" />
            <img src ={myImage4} alt = "photogrid" />
            <img src ={myImage5} alt = "photogrid" />
            <img src ={myImage6} alt = "photogrid" />
            <img src ={myImage7} alt = "photogrid" />
            <img src ={myImage8} alt = "photogrid" />
            <img src ={myImage9} alt = "photogrid" />
             */}
            
            {/* {images.map((imagePromise, index) => (
            <img key={index} src={imagePromise.default} alt="photo-grid" />
            ))} */}
        </div>
    ) ; 
}

export default PhotoGrid ;