import * as React from "react";
import Home from "./components/home/HomePage";

import "./components/App.scss";


export interface RouteInfo {
  location: string,
  name: string,
  thing: JSX.Element
}


export const AllRoutes = {
  HomeRoute: {
    location: "/",
    name: Home.props.name,
    thing: Home
  } as RouteInfo
};
