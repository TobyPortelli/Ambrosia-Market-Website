import * as ReactDom from "react-dom";
import * as React from "react";
import Header from "../header/Header";
import "../../assets/scss/App.scss";
import { home, pageInfo } from "../../routes";
import { ImgHome } from "../ImageHandling";

class HomePageWrapper implements pageInfo {
  getDescription(): string {
    return "Home page plz";
  };

  getImage(): HTMLImageElement {
    return (
      ImgHome
    );
  };

  getTitle(): string {
    return "Home";
  };

  component = function render(): JSX.Element {
    return (
      <>
        {Header.getNavHeader(home)}
        <div>
          <h1>hi</h1>
          <h2>how is you?</h2>
        </div>
      </>
    );
  };
}

export default new HomePageWrapper();
