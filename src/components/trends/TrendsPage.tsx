import * as ReactDom from "react-dom";
import * as React from "react";
import Header from "../header/Header";
import "../../assets/scss/App.scss";
import { pageInfo, trends } from "../../routes";
import { ImgTrend } from "../ImageHandling";

class TrendsPage implements pageInfo {
  public getDescription(): string {
    return "Analyze trends in the market";
  };

  public getImage(): HTMLImageElement {
    return ImgTrend;
  };

  public getTitle(): string {
    return "Trend Analysis";
  };

  component(): JSX.Element {
    return (
      <>
        {Header.getNavHeader(trends)}
        <div>
          <h1>hi</h1>
          <h2>Welcome to the Trend analysis page?</h2>
        </div>
      </>
    );
  }
}


export default new TrendsPage();
