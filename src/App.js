import './App.css';
import AppRoutes from "./AppRoutes/AppRoutes";
import Header from "./UI/Header/Header";
import React,  {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {itemsOperations} from './store/items'

function App() {

const dispatch = useDispatch();

    useEffect(() => {
        dispatch(itemsOperations.fetchData('./items.json'))
        dispatch(itemsOperations.fetchFavorites(JSON.parse(localStorage.getItem('fav'))))
        dispatch(itemsOperations.fetchCard(JSON.parse(localStorage.getItem('card'))))
    }, [dispatch])

  return (
    <div className="app-wrapper">
        <div className='app'>
            <Header/>
            <AppRoutes/>
        </div>

    </div>
  );
}

export default App;
