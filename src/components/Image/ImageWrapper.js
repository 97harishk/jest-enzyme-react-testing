import React from "react";
import { ImageContext } from "./ImageContext";
import Image from "./Image";

function ImageWrapper() {
  return (
    <ImageContext.Consumer>
      {({ image_url, image_alt }) => (
        <Image image_url={image_url} image_alt={image_alt} />
      )}
    </ImageContext.Consumer>
  );
}
export default ImageWrapper;
