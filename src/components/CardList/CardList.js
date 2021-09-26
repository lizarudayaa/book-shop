import React from "react";
import Basket from "../../UI/CardUI/Basket";
import Summary from "../../UI/CardUI/Summary";
import { useSelector } from "react-redux";
import { itemsSelectors } from "../../store/items";
import { useHistory } from "react-router-dom";
import { NoItems } from "../../UI/Styles/Styles";
import Button from "../../UI/Button/Button";

import "./CardList.scss";
import CardItem from "./CardItem";

// const finalAmount = (arr) => {
//   return arr
//     .map((book) => +book.price)
//     .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// };

const CardList = () => {
  const cardItems = useSelector(itemsSelectors.cardItems());

  const cardItemsList = cardItems.map((i) => (
    <CardItem key={Math.random()} item={i} />
  ));
  const history = useHistory();

  if (!cardItems.length) {
    return (
      <NoItems>
        <h3>No items found</h3>
        <Button
          color="black"
          text="Products"
          onClick={() => history.push("/home")}
        />
      </NoItems>
    );
  }

  return (
    <div className="main">
      <div className="basket">
        <Basket />
        <div>{cardItemsList}</div>
      </div>
      <Summary />
    </div>
  );
};

export default CardList;
