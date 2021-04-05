import React from "react";
import ImageWrapper from "../components/Image/ImageWrapper";
import { ImageContext } from "../components/Image/ImageContext";

const props = {
  image_url: "https://img-corp.com/images/logo@2x.png",
  image_alt: "test_image",
};

function App() {
  return (
    <ImageContext.Provider value={props}>
      <div className="App">
        <h1>Hello</h1>
        <ImageWrapper />
      </div>
    </ImageContext.Provider>
  );
}

export default App;
