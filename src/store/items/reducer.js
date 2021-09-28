import types from "./types";
const initialState = {
  isLoading: true,
  data: [],
  favorites: [],
  card: [],
  item: {},
  totalPrice: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DATA: {
      return { ...state, data: action.payload };
    }
    case types.SET_IS_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    case types.FETCH_FAVORITES: {
      const data = action.payload;
      if (!data) {
        return { ...state };
      } else {
        return { ...state, favorites: data };
      }
    }
    case types.TOGGLE_FAVORITES: {
      return { ...state, favorites: action.payload };
    }
    case types.FETCH_CARD: {
      const data = action.payload;
      if (!data) {
        return { ...state };
      } else {
        return { ...state, card: data };
      }
    }
    case types.ADD_TO_CARD: {
      const book = action.payload;
      const updatedPrice = state.totalPrice + book.price * book.amount;

      const existingItemIndex = state.card.findIndex((i) => i.id === book.id);
      const existingItem = state.card[existingItemIndex];
      let updatedItem;
      let updatedList;
      if (existingItem) {
        updatedItem = { ...existingItem, amount: existingItem.amount + 1 };
        updatedList = [...state.card];
        updatedList[existingItemIndex] = updatedItem;
      } else {
        updatedList = [...state.card, book];
      }
      localStorage.setItem("card", JSON.stringify(updatedList));
      return { ...state, card: updatedList, totalPrice: updatedPrice };
    }
    case types.DELETE_ITEM: {
      const item = action.payload;
      const existingItemIndex = state.card.findIndex(
        (i) => i.name === item.name
      );
      const existingItem = state.card[existingItemIndex];
      const updatedPrice = state.totalPrice - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.card.filter((i) => i.id !== item.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.card];
        updatedItems[existingItemIndex] = updatedItem;
      }
      localStorage.setItem("card", JSON.stringify(updatedItems));
      return { ...state, card: updatedItems, totalPrice: updatedPrice };
    }
    case types.SET_ITEM: {
      return { ...state, item: action.payload };
    }
    case types.CLEAR_CARD: {
      localStorage.removeItem("card");
      return { ...state, card: [], item: {}, totalPrice: 0 };
    }
    default:
      return state;
  }
};

export default reducer;
