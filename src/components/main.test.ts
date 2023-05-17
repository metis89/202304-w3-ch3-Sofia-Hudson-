import { Main } from "./main";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
describe("Given a Main component", () => {
  describe("When it instantiates a div", () => {
    test("Then it should render a div element in the document", () => {
      document.body.innerHTML = `<slot></slot>`;
      new Main("slot");
      const element = screen.getByRole("div");

      expect(element).toBeInTheDocument();
    });
  });

  // Describe("When it tries to instantiate an element in a selector that doesn't exist", () => {
  //   test('Then it should throw an error message', () => {
  //     document.body.innerHTML = `<slot></slot>`;
  //     new Main('span');
  //     const element = screen.getByRole('div');

  //     expect(element).toThrowError('Invalid Selector');
  //   });
  // });
});
