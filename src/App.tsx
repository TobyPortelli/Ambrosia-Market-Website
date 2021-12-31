import * as React from "react";
import "./components/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllRoutes, RouteInfo } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {toRoute(AllRoutes.HomeRoute)}
      </Routes>
    </BrowserRouter>
  );
}

function toRoute(route: RouteInfo): React.ReactFragment {
  return <Route path={route.location} element={route.thing.pageComponent()} />;
}

export default App;
