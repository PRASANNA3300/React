import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const privateRoute = () => {
  const user = useSelector((state) => state.userInfo.user);

  if (!user) {
    return <Navigate to="/Login" />;
  }

  return <Outlet />;
};

export default privateRoute;
