import React, {useState, useEffect, createContext} from 'react';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import Favorites from './Components/Favorites/Favorites'
import Orders from './Components/Orders/Orders';

import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import './App.scss';


export const AppContext = createContext({})



function App() {

  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favoritesItems, setFavoritesItems] = useState([])
  const [ordersItems, setOrdersItems] = useState([])
  const [isFavorite, setIsFavorite] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  useEffect(()=>{
    async function getFetch() {
      setIsLoading(true)
      await axios.get('https://62ac95029fa81d00a7b55b1a.mockapi.io/favoritesItems').then((res)=>{
        setFavoritesItems(res.data)})
      await axios.get('https://62ac95029fa81d00a7b55b1a.mockapi.io/cartItems').then((res)=>{
        setCartItems(res.data)})
      await axios.get('https://62ac95029fa81d00a7b55b1a.mockapi.io/products').then((res)=>{
        setProducts(res.data)})
      await axios.get('https://62ac95029fa81d00a7b55b1a.mockapi.io/ordersItems').then((res)=>{
        setOrdersItems(res.data)})
      setIsLoading(false)
      }
    getFetch()
  }, [])

  return (
      <div className='wrapper'>
        <div className='container'>
          <AppContext.Provider value={{
            products, 
            setProducts,  
            cartItems,  
            setCartItems,  
            favoritesItems,  
            setFavoritesItems, 
            isFavorite, 
            setIsFavorite,
            ordersItems,
            setOrdersItems,
            isLoading,
            setIsLoading
          }}>

            <Header postIsCart={(isCartOpen) => {setIsCartOpen(isCartOpen)}}/>
              
            {isCartOpen && 
            <Cart
              postIsCart={(isCartOpen) => {setIsCartOpen(isCartOpen)}}
            />}

            <Routes>
              <Route exact path='/' element={<Products/>}/>
              <Route path='/favorites' element={<Favorites/>}/>
              <Route path='/orders' element={<Orders/>}/>
            </Routes>
          </AppContext.Provider>
        </div>
      </div>
  );
}

export default App;
