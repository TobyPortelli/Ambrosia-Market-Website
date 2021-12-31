import * as React from "react";
import HomePage from "./components/home/HomePage";
import AItemsPage from "./components/aitems/AItems";
import { Route } from "react-router-dom";
import { Component } from "react";
import "./assets/scss/App.scss";


interface routeInfo {
  location: string,
  thing: React.Component<any> & {
    render(): JSX.Element;
  },
}

export function toRoute(route: routeInfo): React.ReactFragment {
  return <Route path={route.location} element={<route.thing />} />;
}

export const item_database: routeInfo = {
  location: "/item",
  thing: HomePage
};

export const home: routeInfo = {
  location: "/",
  thing: HomePage
};
export const aitems: routeInfo = {
  location: "/aitems",
  thing: AItemsPage
};