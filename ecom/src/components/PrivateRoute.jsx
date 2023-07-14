

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const state = useSelector((state) => state.user);
  const auth = (state.user && Object.keys(state.user).length) || (localStorage.getItem('loggedInUser') && localStorage.getItem('loggedInUser').length > 0)
  console.log('user----',auth) 
  //  Object.keys(user).length; // determine if authorized, from context or however you're doing it
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
