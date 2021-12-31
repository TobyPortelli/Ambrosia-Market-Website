import * as React from "react";
import Home from "./components/home/HomePage";

import "./components/App.scss";
import { PageWrapper } from "./components/PageWrapper";


export interface RouteInfo {
  location: string,
  thing: PageWrapper
}


export const AllRoutes = {
  HomeRoute: {
    location: "/",
    thing: Home
  } as RouteInfo
};
export const AllPages = {
  HomePage: Home
};

export const AllPagesMap: Map<string, PageWrapper> = new Map<string, PageWrapper>();
AllPagesMap.set(Home.name, Home);