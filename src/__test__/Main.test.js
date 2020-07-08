import React from "react";
import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import Main from "../components/Main";

describe("the Main.js working correctly", () => {
  // global.fetch = jest.fn(() => Promise.resolve({
  //     json : () => Promise.resolve({
  //         name : "test",
  //         sprites:{front_default: "testImage"}
  //     })
  // }))
  describe("it render the correct items", () => {
    it("It renders The Hello world text", () => {
      const tree = render(<Main />);
      const linkElement = tree.getByText("Hello, World");
      expect(linkElement).toBeInTheDocument();
    });
    it("changes the dom correctly", () => {
      const tree = render(<Main />);
      const input = tree.getByPlaceholderText("input");
      expect(input.value).toBe("");
      fireEvent.change(input, { target: { value: "Re:Coded" } });
      expect(input.value).toBe("Re:Coded");
      const linkElement = tree.getByText("Re:Coded");
      expect(linkElement).toBeInTheDocument();
      // expect(fetch).toHaveBeenCalled()
    });

    it("snapshots", () => {
      const component = renderer.create(<Main />);
      let json = component.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("it doesn't call the function without input", () => {
    it("it doesn't call the function without input", () => {
      const logMe = jest.fn();
      const tree = render(<Main logMe={logMe} />);
      const button = tree.getByTestId("button");
      fireEvent.click(button);
      expect(logMe).not.toHaveBeenCalled();
    });
  });

  describe("it does call the function with input", () => {
    it("it does call the function with input", () => {
      const logMe = jest.fn();
      const tree = render(<Main logMe={logMe} />);
      const input = tree.getByPlaceholderText("input");
      fireEvent.change(input, { target: { value: "Re:Coded" } });
      const button = tree.getByTestId("button");
      fireEvent.click(button);
      expect(logMe).toHaveBeenCalled();
    });
  });

  describe("it does call the function with input", () => {
    it("it does call the function with input", () => {
      const logMe = jest.fn();
      const tree = render(<Main logMe={logMe} />);
      const input = tree.getByPlaceholderText("input");
      fireEvent.change(input, { target: { value: "Re:Coded" } });
      const button = tree.getByTestId("button");
      fireEvent.click(button);
      expect(logMe).toHaveBeenCalled();
      expect(logMe).toHaveBeenCalledWith("Re:Coded");
    });
  });
});
