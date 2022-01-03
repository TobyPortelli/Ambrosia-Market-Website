import "./PageWrapperSS.scss";
import SidePanel from "./util/SidePanel";
import UserProfile from "../user/UserProfile";
import "./PageWrapperSS.scss";
import * as React from "react";

export interface PageProps {
  name: string;
}

export abstract class PageWrapper extends React.Component<PageProps> {
  constructor(props: PageProps) {
    super(props);
  }

  render() {
    this.onOpenPage_();
    return (
      <>
        <div className={"side_page_container"}>
          <SidePanel />
        </div>
        <div className={"main_page_container"}>
          {this.createMainPage()}
        </div>
      </>
    );
  }

  public abstract createMainPage(): JSX.Element ;


  private onOpenPage_(): void {
    UserProfile.setCurrentPage(this);
  }
}

