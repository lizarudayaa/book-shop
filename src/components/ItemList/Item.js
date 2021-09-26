import React from "react";
import {
  Card,
  CardIconStar,
  CardImg,
  CardImgWrapper,
} from "../../UI/Styles/Styles";
import Star from "../../UI/icons/Star";
import Button from "../../UI/Button/Button";
import styles from "./Items.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { itemsOperations, itemsSelectors } from "../../store/items";
import Modal from "../Modal/Modal";
import { modalOperations, modalSelectors } from "../../store/modal";

const Item = ({ data, showFull }) => {
  const dispatch = useDispatch();
  const modal = useSelector(modalSelectors.modal());
  const isFavorite = useSelector(itemsSelectors.isFavorite(data));
  const chosenItem = useSelector(itemsSelectors.item());
  const addToCard = () => {
    dispatch(modalOperations.setModalId(1));
    dispatch(itemsOperations.setItem({ ...data, amount: 1 }));
  };

  return (
    <Card>
      <CardImgWrapper>
        <CardImg src={data.img} alt={data.name} />
        <CardIconStar
          onClick={() => {
            dispatch(itemsOperations.toggleFavList(data));
          }}
        >
          {isFavorite ? <Star color="yellow" filled /> : <Star color="black" />}
        </CardIconStar>
      </CardImgWrapper>
      {showFull && (
        <>
          <div className={styles.header}>
            <p className={styles.title}>{data.name}</p>
          </div>
          <div className={styles.body}>
            <p className={styles.price}>
              {data.price}
              <span>$</span>
            </p>
            <Button color="black" text="add to card" onClick={addToCard} />
          </div>
        </>
      )}
      <div>
        {modal && (
          <Modal
            header={modal.header}
            closeModal={() => dispatch(modalOperations.setModal(null))}
            text={modal.text}
            actions={modal.actions({
              btnClose: () => {
                dispatch(modalOperations.setModal(null));
              },
              btnAdd: () => {
                dispatch(itemsOperations.addToCard(chosenItem));
                dispatch(modalOperations.setModal(null));
              },
            })}
          />
        )}
      </div>
    </Card>
  );
};

export default Item;
