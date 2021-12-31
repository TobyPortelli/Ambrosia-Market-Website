import * as ReactDom from "react-dom";
import * as React from "react";
import Header from "../header/Header";
import "../../assets/scss/App.scss";

interface IProps {
}

class HomePage extends React.Component<IProps> {
  render(): JSX.Element {
    return (
      <>
        {Header.getNavHeader()}
        <div>
          <h1>hi</h1>
          <h2>how is you?</h2>
        </div>
      </>
    );
  }
}

export default HomePage;
