import React from 'react';
import { Navigate,Outlet } from 'react-router';

export default function Protected() {
    const isAuth=window.localStorage.getItem("Token");
  return isAuth ? <Outlet/>: <Navigate to = "/Login" />;
};
