//DO NOT CHANGE CODE IN THIS FILE

import React from "react";
import "../App.css";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          return <Redirect to="/planner/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;