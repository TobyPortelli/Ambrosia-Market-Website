import * as React from "react";
import HomePage from "./components/home/HomePage";
import AItemsPage from "./components/catalog/Catalog";
import PlayersPage from "./components/player/Player";
import TrendsPage from "./components/trends/TrendsPage";
import { Route } from "react-router-dom";

import "./assets/scss/App.scss";
import { ReactComponentElement, ReactElement } from "react";


export interface pageInfo {
  component(): JSX.Element;

  getImage(): HTMLImageElement;

  getTitle(): string;

  getDescription(): string;
}

export interface routeInfo {
  location: string,
  thing: pageInfo
}

export function toRoute(route: routeInfo): React.ReactFragment {
  return <Route path={route.location} element={route.thing.component()} />;
}

export const home: routeInfo = {
  location: "/",
  thing: HomePage
};
export const catalog: routeInfo = {
  location: "/catalog",
  thing: AItemsPage
};
export const trends: routeInfo = {
  location: "/trend",
  thing: TrendsPage
};
export const players: routeInfo = {
  location: "/player",
  thing: PlayersPage
};
