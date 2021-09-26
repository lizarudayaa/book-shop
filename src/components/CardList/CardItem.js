import React from "react";
import Button from "../../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { itemsOperations, itemsSelectors } from "../../store/items";
import Modal from "../Modal/Modal";
import { modalOperations, modalSelectors } from "../../store/modal";

const CardItem = ({ item }) => {
  const dispatch = useDispatch();
  const modal = useSelector(modalSelectors.modal());
  const chosenItem = useSelector(itemsSelectors.item());
  const openModal = () => {
    dispatch(itemsOperations.setItem(item));
    dispatch(modalOperations.setModalId(2));
  };
  return (
    <div className="basket_product" key={item.id}>
      <div className="item">
        <div>
          <img src={item.img} alt={item.name} className="basket_image" />
        </div>
        <div className="basket_details">
          <h2>{item.name}</h2>
          <p>Product code #{item.id}</p>
        </div>
      </div>
      <div className="price">{item.price}</div>
      <div className="quantity">
        <p className="quantity-field">{item.amount}</p>
      </div>
      <div className="subtotal">{item.price}</div>
      <div className="remove">
        <Button color="black" text="Remove" onClick={openModal} />
      </div>
      {modal && (
        <Modal
          header={modal.header}
          text={modal.text}
          closeModal={() => dispatch(modalOperations.setModal(null))}
          actions={modal.actions({
            agree: () => {
              dispatch(itemsOperations.deleteItem(chosenItem));
              dispatch(modalOperations.setModal(null));
            },
            disagree: () => dispatch(modalOperations.setModal(null)),
          })}
        />
      )}
    </div>
  );
};

export default CardItem;
