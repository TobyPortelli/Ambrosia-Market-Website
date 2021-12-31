import * as React from "react";
import "./assets/scss/App.scss";
import "./sbc/index";
import { BrowserRouter, Routes } from "react-router-dom";
import { home, aitems, item_database, toRoute } from "./routes";

interface IState {
  apple: boolean;
}

function App() {

  // let reactElement = <Route path={home.location} element={<homePage />} />;
  // console.log(reactElement);
  return (
    <BrowserRouter>
      <Routes>
        {toRoute(item_database)}
        {toRoute(home)}
        {toRoute(aitems)}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
