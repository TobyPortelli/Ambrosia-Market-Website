import "./PageWrapperSS.scss";
import SidePanel from "./util/SidePanel";
import UserProfile from "../user/UserProfile";
import { AllPages } from "../routes";
import HomePage from "./home/HomePage";
import "./PageWrapperSS.scss";

export abstract class PageWrapper {
  abstract name: string;

  public onOpenPage(): void {
  };

  public pageComponent(): JSX.Element {
    this.onOpenPage_();
    return (
      <>
        <div className={"side_page_container"}>
          {this.createSidePanel()}
        </div>
        <div className={"main_page_container"}>
          {this.createMainPage()}
        </div>
      </>
    );
  }

  public abstract createMainPage(): JSX.Element ;

  public createSidePanel() {
    return SidePanel.createSidePanel();
  }

  private onOpenPage_(): void {
    let isPageChange = UserProfile.setCurrentPage(HomePage.name);
    if (isPageChange) {
      this.onOpenPage();
    }
  }
}

