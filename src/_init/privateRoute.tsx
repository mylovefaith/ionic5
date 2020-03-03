import React, { Component } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export interface PrivateRouteProps extends RouteProps {
  isLoggedIn: boolean
  component: React.FC
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({component, isLoggedIn, ...rest}) => {
  const routeComponent = (props: any) => (
    isLoggedIn ? React.createElement(component, props) : <Redirect to ='/login' />
  )

  return <Route {...rest} render={routeComponent} />;
};


export default PrivateRoute;
