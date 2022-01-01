import "./SidePanelSS.scss";
import { AmbrosiaMarketIcon } from "../ImageHandling";

class rowInfo {
  icon: JSX.Element;
  text: string;

  constructor(icon: JSX.Element, text: string) {
    this.icon = icon;
    this.text = text;
  }

  createIcon(): JSX.Element {
    return this.icon;
  };
}

class SidePanel {
  static createSidePanel(): JSX.Element {
    let titleRowInfo = new rowInfo(
      AmbrosiaMarketIcon,
      "Ambrosia Market"
    );
    let titleRow = SidePanel.createIconRow(
      titleRowInfo.createIcon(),
      SidePanel.createLoginRow(titleRowInfo)
    );
    let loginRow = SidePanel.createLoginRow(titleRowInfo);
    return <>
      <div className={"side_panel_root_container"}>
        <div className={"side_panel_root"}>
          {SidePanel.createRow(titleRow)}
          {SidePanel.createRow(loginRow)}
        </div>
      </div>
    </>;
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

  private static createLoginRow(titleRow: rowInfo) {
    return <>
      <text>
        {titleRow.text}
      </text>
    </>;
  }
}

export default SidePanel;
