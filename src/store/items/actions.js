import types from "./types";

const fetchData = (data) => ({
  type: types.FETCH_DATA,
  payload: data,
});

const setIsLoading = (value) => ({
  type: types.SET_IS_LOADING,
  payload: value,
});

const setModal = (value) => ({
  type: types.SET_MODAL_ID,
  payload: value,
});

const fetchFavorites = (data) => ({
  type: types.FETCH_FAVORITES,
  payload: data,
});

const toggleFavorites = (item) => ({
  type: types.TOGGLE_FAVORITES,
  payload: item,
});

const fetchCard = (data) => ({
  type: types.FETCH_CARD,
  payload: data,
});

const addToCard = (item) => ({
  type: types.ADD_TO_CARD,
  payload: item,
});

const deleteItem = (item) => ({
  type: types.DELETE_ITEM,
  payload: item,
});

const setItem = (item) => ({
  type: types.SET_ITEM,
  payload: item,
});

const setAmount = (num) => ({
  type: "AMOUT",
  payload: num,
});

const clearCard = () => ({
  type: types.CLEAR_CARD,
});
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  fetchData: fetchData,
  setIsLoading,
  setModal,
  fetchFavorites,
  toggleFavorites,
  fetchCard,
  addToCard,
  setItem,
  deleteItem,
  setAmount,
  clearCard,
};
