import "./SidePanelSS.scss";
import { AmbrosiaMarketIcon } from "../ImageHandling";
import * as React from "react";

interface IconContent {
  icon: JSX.Element,
  content: JSX.Element
}

class RowInfo {
  icon: JSX.Element;
  text: string;
  className: string;

  constructor(icon: JSX.Element, text: string, className: string = "") {
    this.icon = icon;
    this.text = text;
    this.className = className;
  }

}

class SidePanel extends React.Component {
  render() {
    let titleRow = <SidePanelSimpleRow {...(new RowInfo(AmbrosiaMarketIcon, "Ambrosia Market"))} />;
    let loginRow = <SidePanelLoginRow />;
    let searchRow = <SidePanelLoginRow />;
    let searchFilter = <SidePanelSimpleRow {...(new RowInfo(AmbrosiaMarketIcon, "Search Filters"))} />;
    let market = <SidePanelSimpleRow {...(new RowInfo(AmbrosiaMarketIcon, "Market"))} />;
    let trade = <SidePanelSimpleRow {...(new RowInfo(AmbrosiaMarketIcon, "Trade"))} />;
    let about = <SidePanelSimpleRow {...(new RowInfo(AmbrosiaMarketIcon, "About Ambrosia"))} />;
    let discord = <SidePanelSimpleRow {...(new RowInfo(AmbrosiaMarketIcon, "Join our Discord"))} />;
    let profile = <SidePanelSimpleRow {...(new RowInfo(AmbrosiaMarketIcon, "Your Profile"))} />;
    return <>
      <div className={"side_panel_root_container"}>
        <div className={"side_panel_root"}>
          <SidePanelRow {...titleRow} />
          <SidePanelRow {...loginRow} />
          <SidePanelRow {...searchRow} />
          <SidePanelRow {...searchFilter} />
          <SidePanelRow {...market} />
          <SidePanelRow {...trade} />
          <SidePanelRow {...about} />
          <SidePanelRow {...discord} />
          <SidePanelRow {...profile} />
        </div>
      </div>
    </>;
  }
}

class SidePanelSimpleRow extends React.Component<RowInfo> {
  constructor(props: RowInfo) {
    super(props);
  }

  render() {
    let content = <>
      <text className={this.props.className}>
        {this.props.text}
      </text>
    </>;
    return <SidePanelIconRow icon={this.props.icon} content={content} />;
  }
}

class SidePanelRow extends React.Component<JSX.Element> {
  constructor(props: JSX.Element) {
    super(props);
  }

  render() {
    return <>
      <div className={"side_panel_row_container"}>
        {this.props}
      </div>
    </>;
  }
}


class SidePanelIconRow extends React.Component<IconContent> {
  constructor(props: IconContent) {
    super(props);
  }

  render() {
    return <>
      <div className={"side_panel_row_icon_container"}>
        <div className={"side_panel_row_icon"}>
          {this.props.icon}
        </div>
      </div>
      <div className={"side_panel_row_content_container"}>
        <div className={"side_panel_row_content"}>
          {this.props.content}
        </div>
      </div>
    </>;
  }
}

class SidePanelLoginRow extends React.Component {
  render() {
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
