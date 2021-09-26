import actions from "./actions";
import axios from "axios";
import { modals } from "../../components/Modal/ModalDeclaration";
import { itemsOperations } from "./index";

const fetchData = (data) => (dispatch, getState) => {
  axios(data).then((res) => {
    dispatch(actions.fetchData(res.data));
    dispatch(actions.setIsLoading(false));
  });
};

const setModalId = (id) => (dispatch) => {
  const modal = modals.find((i) => i.modalID === id);
  if (modal) {
    dispatch(actions.setModal(modal));
  }
};

const toggleFavList = (item) => (dispatch, getState) => {
  const favList = JSON.parse(localStorage.getItem("fav")) || [];
  const fav = favList.findIndex((i) => item.id === i.id);
  if (fav === -1) {
    favList.push(item);
  } else {
    favList.splice(fav, 1);
  }
  localStorage.setItem("fav", JSON.stringify(favList));
  dispatch(actions.toggleFavorites(favList));
};

const {
  setModal,
  fetchFavorites,
  addToCard,
  fetchCard,
  setItem,
  deleteItem,
  clearCard,
} = actions;

export default {
  fetchData,
  setModalId,
  setModal,
  fetchFavorites,
  toggleFavList,
  addToCard,
  fetchCard,
  setItem,
  deleteItem,
  clearCard,
};
