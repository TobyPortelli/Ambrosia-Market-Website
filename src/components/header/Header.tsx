import img_bot_src from "../../../public/img/Bot.png";

import "../../assets/scss/Header.scss";
import "../../assets/scss/App.scss";

export default class Header {
  static getNavHeader() {
    let img = <img src={img_bot_src} alt="ItemDatabase" />;
    return <header>
      <div className="navigation_bar_container_top_top">
        <div className="navigation_bar_top_top">
          <span className="text_normal">
            <p className="title_bar">Title here plz</p>
          </span>
        </div>
      </div>
      <div className="navigation_bar_container">
        <div className="navigation_bar_container_top">
          {this.getNavIcon(
            img,
            <>Item Database</>,
            <>Wynncraft's item database</>,
            "../item"
          )}
          {this.getNavIcon(
            img,
            <>Players</>,
            <>Player's Inventory</>,
            "../player"
          )}
          {this.getNavIcon(
            img,
            <>Item Stats</>,
            <>Aggregated Item Stats</>,
            "../aitems"
          )}
          {this.getNavIcon(
            img,
            <>Owned Items</>,
            <>Particular item histories</>,
            "../owned"
          )}
        </div>
        <div className="navigation_bar_container_middle">

        </div>
        {/*<div className="navigation_bar_container_bottom">*/}
        {/*</div>*/}
      </div>
    </header>
      ;
  }

  private static getNavIcon(img: JSX.Element, title: JSX.Element, desc: JSX.Element, a_link: string) {
    return <div className="nav_icon_container">
      <a href={a_link}>
        <div className="nav_icon_block">
          <div className="nav_icon">
            {img}
          </div>
          <span className="text_normal">
            <div className="nav_text">
              <div className="nav_text_title">
                {title}
              </div>
              <div className="nav_text_desc">
                {desc}
              </div>
            </div>
          </span>
        </div>
      </a>
    </div>;
  }
}
