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
    let titleRow = new rowInfo(
      AmbrosiaMarketIcon,
      "Ambrosia Market"
    );
    return <>
      <div className={"side_panel_root_container"}>
        <div className={"side_panel_root"}>
          {SidePanel.createTitleRow(titleRow)}
        </div>
      </div>
    </>;
  }

  private static createRow() {

  }

  private static createTitleRow(rowInfo1: rowInfo) {
    return <>
      <div className={"side_panel_row_container"}>

        <div className={"side_panel_row_icon"}>
          {rowInfo1.createIcon()}
        </div>
        <div className={"side_panel_row_content"}>

        </div>
      </div>
    </>
      ;
  }
}

export default SidePanel;
