import Modal from "./Modal";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import store from "../../store/store";
import { Provider } from "react-redux";
import { modalOperations } from "../../store/modal";

const testProps = {
  header: "header",
  text: "text",
  actions: [<button key={1}>Test</button>],
  closeModal: jest.fn(),
};

describe("Testing Modal Component", () => {
  beforeEach(() => {
    store.dispatch(modalOperations.setModal(1));
  });
  test("Render Component", () => {
    render(
      <Provider store={store}>
        <Modal />
      </Provider>
    );
  });

  test("Passing text to header", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <Modal header={testProps.header} />
      </Provider>
    );
    expect(getByRole("heading")).toBeInTheDocument();
  });

  test("Passing prop text", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Modal text={testProps.text} />
      </Provider>
    );
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
