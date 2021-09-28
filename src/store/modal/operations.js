import actions from "./actions";

import { modals } from "../../components/Modal/ModalDeclaration";

const setModalId = (id) => (dispatch) => {
  const modal = modals.find((i) => i.modalID === id);
  if (modal) {
    dispatch(actions.setModal(modal));
  }
};

const { setModal } = actions;
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default { setModalId, setModal };
