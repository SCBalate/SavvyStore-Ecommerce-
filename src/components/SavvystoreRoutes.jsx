import React from 'react'
import {Route,Routes} from "react-router-dom"
import HomePage from "../pages/Home/HomePage"
import ProductListPage from "../pages/Product/ProductListPage"
import ProductDetails from "../pages/Product/ProductDetails/ProductDetails"
import RequireAuth from "../components/RequireAuth"
import  ProfilePage from "../pages/Profile/ProfilePage"
import Orders from "../pages/Orders/Orders"
import WishListPage from "../pages/WishList/WishListPage"
import CartPage from '../pages/Cart/CartPage'
import Login from '../pages/Auth/Login/Login'
import Signup from '../pages/Auth/Signup/Signup'
import Mockman from "mockman-js";
const SavvystoreRoutes = () => {
  return (
    <div className='container'>
        <Routes>
            <Route path ="/" element={<HomePage/>}/>
            <Route path="/product" element={<ProductListPage />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <WishListPage />
            </RequireAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <CartPage />
            </RequireAuth>
          }
        />
         <Route
          path="/profile"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman/>}/>
        </Routes>
    </div>
  )
}

export default SavvystoreRoutes