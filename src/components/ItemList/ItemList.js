import React from 'react';
import {useSelector} from "react-redux";
import {itemsSelectors} from "../../store/items";
import Item from "./Item";
import {Wrapper} from "../../UI/Styles/Styles";

const ItemList = () => {
    const data = useSelector(itemsSelectors.itemsData())
    const itemList = data.map(item => <Item data={item} key={item.id} showFull />)
    return (
        <Wrapper>
            {itemList}
        </Wrapper>
    );
};

export default ItemList;