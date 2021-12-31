import "../../assets/scss/Header.scss";
import "../../assets/scss/App.scss";
import { home, catalog, players, trends, routeInfo } from "../../routes";

export default class Header {
  static getNavHeader(title: routeInfo) {
    return <>
      <header>
        <div className="navigation_bar_container_top_top">
          <div className="navigation_bar_top_top">
          <span className="text_normal">
            <p className="title_bar">{title.thing.getTitle()}</p>
          </span>
          </div>
        </div>
        <div className="navigation_bar_container">
          <div className="navigation_bar_container_top">
            {this.getNavIcon(home)}
            {this.getNavIcon(catalog)}
            {this.getNavIcon(players)}
            {this.getNavIcon(trends)}
          </div>
          <div className="navigation_bar_container_middle">

          </div>
        </div>
      </header>
    </>;
  }

  private static getNavIcon(info: routeInfo) {
    console.log(info.thing);
    return <div className="nav_icon_container">
      <a href={info.location}>
        <div className="nav_icon_block">
          <div className="nav_icon">
            {info.thing.getImage()}
          </div>
          <span className="text_normal">
            <div className="nav_text">
              <div className="nav_text_title">
                {info.thing.getTitle()}
              </div>
              <div className="nav_text_desc">
                {info.thing.getDescription()}
              </div>
            </div>
          </span>
        </div>
      </a>
    </div>;
  }
}
