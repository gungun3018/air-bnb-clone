import React from "react"
import Navbar from "./components/Navbar"
import PhotoGrid from "./components/PhotoGrid"
import Content from "./components/Content"
import Card from "./components/Card"
import myImage1 from "./assets/person1.png"
import myImage2 from "./assets/wedding.png"
import myImage3 from "./assets/water.jpg"
import image4 from "./assets/bridge.jpg"

function App() {
  return (
    <div>
      <Navbar />
      <PhotoGrid />
      <Content />

      <Card img={myImage1} rating={5.0} upvotes={6} des="Life lessons with Katie Zaferes" price={136} />
      <Card img={myImage2} rating={4.0} upvotes={20} des="Learning wedding photgraphy" price={150} />
      <Card img={myImage3} rating={4.5} upvotes={10} des="Water, water everywhere Not a single drop to drink" price={145} />
      <Card img={image4} rating={4.7} upvotes={34} des="Architecture and sustainable nature" price={155} />
      {/* <Card img={image4} rating={4.7} upvotes={34} des="Architecture and sustainable nature" price={155} /> */}

    </div>
  )

}

export default App
