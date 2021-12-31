import * as React from "react";
import "./assets/scss/App.scss";
import { BrowserRouter, Routes } from "react-router-dom";
import { home, catalog, players, trends, toRoute } from "./routes";

function App() {

  // let reactElement = <Route path={home.location} element={<homePage />} />;
  // console.log(reactElement);
  return (
    <BrowserRouter>
      <Routes>
        {toRoute(home)}
        {toRoute(catalog)}
        {toRoute(players)}
        {toRoute(trends)}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
