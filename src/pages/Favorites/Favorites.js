import React from 'react';
import {useSelector} from "react-redux";
import {itemsSelectors} from "../../store/items";
import {useHistory} from "react-router-dom";
import Item from "../../components/ItemList/Item";
import {NoItems, Wrapper} from "../../UI/Styles/Styles";
import Button from "../../UI/Button/Button";

const Favorites = () => {

    const favList = useSelector(itemsSelectors.favoritesList())
    const history = useHistory();
    const list = favList.map(i => <Item key={i.id} data={i}/> )

    if(!favList.length){
        return (
            <NoItems>
                <h3>No items found</h3>
                <Button color='black' text='Products' onClick={() => history.push('/home')}/>
            </NoItems>
        )
    }
    return (
        <Wrapper>
            {list}
        </Wrapper>
    );
};

export default Favorites;