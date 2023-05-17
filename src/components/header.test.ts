import { Header } from "./header";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";
describe("Given a Header component", () => {
  describe("When it instantiates a header", () => {
    test("Then it should render a heading element in the document", () => {
      document.body.innerHTML = `<slot></slot>`;
      new Header("slot");
      const element = screen.getByRole("heading");

      expect(element).toBeInTheDocument();
    });
  });

  // Describe("When it tries to instantiate an element in a selector that doesn't exist", () => {
  //   test('Then it should throw an error message', () => {
  //     document.body.innerHTML = `<slot></slot>`;
  //     new Header('span');
  //     const element = screen.getByRole('heading');

  //     expect(element).toThrowError('Invalid Selector');
  //   });
  // });
});
