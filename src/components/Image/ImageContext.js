import { createContext } from "react";

const props = {
  image_url: "https://img-corp.com/images/logo@2x.png1",
  image_alt: "test_image",
};

export const ImageContext = createContext({ ...props });
