import React from 'react'
import  Header  from './Header'
// import {Shimmer} from './Shimmer'
import SavvyStoreRoutes from './SavvystoreRoutes'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const SavvyStore = () => {
  return (
    <><ToastContainer
    position="top-right"
    autoClose={1000}
    newestOnTop={false}
    closeOnClick
    theme="colored"
    rtl={false}
    pauseOnFocusLoss
    draggable
  />
  <Header />
  <SavvyStoreRoutes /></>
  )
}

export default SavvyStore