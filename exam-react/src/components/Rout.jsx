import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import ViewDetails from './ViewDetails';
import SignIn from '../Pages/SignIn';
import Cart from './Cart';

export default function Rout() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/ViewDetails/:id' element={<ViewDetails/>}></Route>
        <Route path='/SignIn' element={<SignIn/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>



    </Routes>
  )
}
