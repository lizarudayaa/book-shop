const isLoading = () => (state) => state.items.isLoading;
const itemsData = () => (state) => state.items.data;
const favoritesList = () => (state) => state.items.favorites;
const isFavorite = (item) => (state) =>
  state.items.favorites.findIndex((i) => i.id === item.id) !== -1;
const cardItems = () => (state) => state.items.card;
const item = () => (state) => state.items.item;
const totalprice = () => (state) =>
  state.items.card
    .map((i) => +i.price * i.amount)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

export default {
  isLoading,
  itemsData,
  favoritesList,
  isFavorite,
  cardItems,
  item,
  totalprice,
};
