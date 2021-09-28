import types from "./types";

const setModal = (value) => ({
  type: types.SET_MODAL_ID,
  payload: value,
});
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  setModal,
};
