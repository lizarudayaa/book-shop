import Button from "./Button";
import { render, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Button Component Test", () => {
  afterEach(cleanup);
  const { getByText, getByTestId } = screen;

  const testProps = {
    color: "red",
    text: "test",
    onClick: jest.fn(),
  };
  test("Rendering Button Component", () => {
    render(<Button />);
  });

  test("Passing text to Component via props", () => {
    render(<Button text={testProps.text} />);
    expect(getByText(testProps.text)).toBeInTheDocument();
  });

  test("Passing background color to Component via props", () => {
    render(<Button color={testProps.color} />);
    expect(getByTestId("button")).toHaveStyle(
      `background-color: ${testProps.color};`
    );
  });

  test("Passing onClick functiob via props", () => {
    render(<Button onClick={testProps.onClick} />);
    userEvent.click(getByTestId("button"));
    expect(testProps.onClick).toHaveBeenCalled();
  });
});
