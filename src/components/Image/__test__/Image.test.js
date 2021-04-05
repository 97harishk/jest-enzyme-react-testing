import React from "react";
import { shallow, mount } from "enzyme";
import { ImageContext } from "../ImageContext";
import Image from "../Image";

const props = {
  image_url: "https://img-corp.com/images/logo@2x.png",
  image_alt: "test_image",
};

let wrapper = shallow(<Image {...props} />);

describe("Image", () => {
  it("should render image", () => {
    const alt = wrapper.find("img").prop("alt");
    expect(alt).toEqual("test_image");
  });
});
