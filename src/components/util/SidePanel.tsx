import "./SidePanelSS.scss";
import { AmbrosiaMarketIcon } from "../ImageHandling";

class rowInfo {
  icon: JSX.Element;
  text: string;
  className: string;

  constructor(icon: JSX.Element, text: string, className: string = "") {
    this.icon = icon;
    this.text = text;
    this.className = className;
  }

  createIcon(): JSX.Element {
    return this.icon;
  };
}

class SidePanel {
  static createSidePanel(): JSX.Element {
    let titleRowInfo = new rowInfo(AmbrosiaMarketIcon, "Ambrosia Market");
    let searchFilterInfo = new rowInfo(AmbrosiaMarketIcon, "Search Filters");
    let marketInfo = new rowInfo(AmbrosiaMarketIcon, "Market");
    let tradeInfo = new rowInfo(AmbrosiaMarketIcon, "Trade");
    let aboutInfo = new rowInfo(AmbrosiaMarketIcon, "About Ambrosia");
    let discordInfo = new rowInfo(AmbrosiaMarketIcon, "Join our Discord");
    let profileInfo = new rowInfo(AmbrosiaMarketIcon, "Your Profile");
    let titleRow = this.createSimpleRow(titleRowInfo);
    let loginRow = SidePanel.createLoginRow();
    let searchRow = SidePanel.createLoginRow();
    let searchFilter = this.createSimpleRow(searchFilterInfo);
    let market = this.createSimpleRow(marketInfo);
    let trade = this.createSimpleRow(tradeInfo);
    let about = this.createSimpleRow(aboutInfo);
    let discord = this.createSimpleRow(discordInfo);
    let profile = this.createSimpleRow(profileInfo);
    return <>
      <div className={"side_panel_root_container"}>
        <div className={"side_panel_root"}>
          {SidePanel.createRow(titleRow)}
          {SidePanel.createRow(loginRow)}
          {SidePanel.createRow(searchRow)}
          {SidePanel.createRow(searchFilter)}
          {SidePanel.createRow(market)}
          {SidePanel.createRow(trade)}
          {SidePanel.createRow(about)}
          {SidePanel.createRow(discord)}
          {SidePanel.createRow(profile)}
        </div>
      </div>
    </>;
  }

  private static createSimpleRow(rowInfoStuff: rowInfo) {
    return SidePanel.createIconRow(
      rowInfoStuff.createIcon(),
      <>
        <text className={rowInfoStuff.className}>
          {rowInfoStuff.text}
        </text>
      </>
    );
  }

  private static createRow(inner: JSX.Element): JSX.Element {
    return <>
      <div className={"side_panel_row_container"}>
        {inner}
      </div>
    </>;
  }

  private static createIconRow(icon: JSX.Element, content: JSX.Element) {
    return <>
      <div className={"side_panel_row_icon_container"}>
        <div className={"side_panel_row_icon"}>
          {icon}
        </div>
      </div>
      <div className={"side_panel_row_content_container"}>
        <div className={"side_panel_row_content"}>
          {content}
        </div>
      </div>
    </>;
  }

  private static createLoginRow() {
    return <>
      <div className={"login_row_container"}>
        <div className={"login_row"}>
          <div className={"login_btn_container"}>
            <div className={"login_btn"}>
              <text>
                Log in
              </text>
            </div>
          </div>
          <div className={"signup_btn_container"}>
            <div className={"signup_btn"}>
              <text>
                Sign up
              </text>
            </div>
          </div>
        </div>
      </div>
    </>;
  }
}

export default SidePanel;
