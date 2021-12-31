import * as ReactDom from "react-dom";
import * as React from "react";
import Header from "../header/Header";
import "../../assets/scss/App.scss";
import { pageInfo, players } from "../../routes";
import { ImgPlayer } from "../ImageHandling";


class PlayersPage implements pageInfo {
  getDescription(): string {
    return "Look at player's inventories";
  }

  getImage(): HTMLImageElement {
    return ImgPlayer;
  }

  getTitle(): string {
    return "Player";
  }

  component(): JSX.Element {
    return (
      <>
        {Header.getNavHeader(players)}
        <div>
          <h1>hi</h1>
          <h2>Welcome to the Players page?</h2>
        </div>
      </>
    );
  }
}

export default new PlayersPage();
