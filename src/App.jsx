import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import CartProvider from './context/CartContext';

function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer greeting={"Furniture's City"}/>} />
      <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting={"Furniture's City"}/>} />
      <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
      <Route path='/cart' element={<Cart />} />
      {/* <Route path='/' element={} /> */}
    </Routes>
    </CartProvider>
    {/* <Footer /> */}
    </BrowserRouter>
    </>
  );
}

export default App;
