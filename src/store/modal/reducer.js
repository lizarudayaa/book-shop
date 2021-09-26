import types from "./types";

const initialState = {
  modal: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MODAL_ID: {
      return { ...state, modal: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
