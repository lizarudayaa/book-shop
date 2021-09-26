import React from "react";
import Loader from "../../UI/Loader/Loader";
import {useSelector } from "react-redux";
import {itemsSelectors } from "../../store/items";
import ItemList from "../../components/ItemList/ItemList";

const Home = () => {
  const isLoading = useSelector(itemsSelectors.isLoading());

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <ItemList />
    </div>
  );
};

export default Home;
