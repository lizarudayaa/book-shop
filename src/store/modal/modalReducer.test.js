import reducer from "./reducer";
import types from "./types";

const state = {
  modal: null,
};
describe("Modal Reducer test", () => {
  test("SET_MODAL_ID", () => {
    const testModal = [{ id: 1 }, { text: "Testing modal reducer" }];
    const action = {
      type: types.SET_MODAL_ID,
      payload: testModal,
    };
    const newState = reducer(state, action);
    expect(newState.modal).toBe(testModal);
  });
});
