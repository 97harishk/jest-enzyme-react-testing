// import { render, screen } from "@testing-library/react";
// import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from "react";
import { shallow } from "enzyme";
import App from "../App";

let wrapper = shallow(<App />);

const sum = (a, b) => {
  return a + b;
};
describe("App", () => {
  it("Heading should be Hello", () => {
    const text = wrapper.find("h1").text();
    expect(text).toEqual("Hello1");
  });
  it("should be 2 and 2 = 4", () => {
    expect(sum(2, 2)).toEqual(4);
  });
});
