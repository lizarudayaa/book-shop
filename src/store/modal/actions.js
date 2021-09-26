import types from "./types";

const setModal = (value) => ({
  type: types.SET_MODAL_ID,
  payload: value,
});

export default {
  setModal,
};
