import Modal from "./Modal";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const testProps = {
  header: "header",
  text: "text",
  actions: [<button key={1}>Test</button>],
  closeModal: jest.fn(),
};

describe("Testing Modal Component", () => {
  test("Render Component", () => {
    render(<Modal />);
  });

  test("Passing text to header", () => {
    const { getByRole } = render(<Modal header={testProps.header} />);
    expect(getByRole("heading")).toBeInTheDocument();
  });

  test("Passing prop text", () => {
    const { getByText } = render(<Modal text={testProps.text} />);
    expect(getByText(testProps.text)).toBeInTheDocument();
  });

  test("Passing actions via props", () => {
    const { getByRole } = render(<Modal actions={testProps.actions} />);
    expect(getByRole("button")).toBeInTheDocument();
  });

  test("closing modal by clicking close button", () => {
    const { getByTestId } = render(<Modal closeModal={testProps.closeModal} />);
    const closeBtn = getByTestId("modal-close");
    expect(testProps.closeModal).not.toHaveBeenCalled();
    fireEvent.click(closeBtn);
    expect(testProps.closeModal).toHaveBeenCalledTimes(1);
  });
});
