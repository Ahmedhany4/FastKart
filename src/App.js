import './App.css';

import { Outlet, Route, Routes } from 'react-router-dom';
import DashBoard from './Pages/dashboard/DashBoard';
import Index from './Pages/Index';
import Products from './Pages/Products' ;
import Cart from './Pages/Cart';
import CheckoutForm from './Pages/CheckoutForm';
import ProductDetails from './Pages/ProductDetails';
import Wishlist from './Pages/Wishlist';

import React from 'react';

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/checkout' element={<CheckoutForm />} />
        <Route path='/dashboard/*' element={<DashBoard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productID' element={<ProductDetails />} />
      </Routes>

    </div>
  );
}

export default App;
