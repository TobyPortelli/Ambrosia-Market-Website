import { PageWrapper } from "../PageWrapper";
import "../PageWrapperSS.scss";
import "../MainPageSS.scss";

class HomePage extends PageWrapper {
  name: string = "Home";

  public createMainPage() {
    return (
      <div className={"main_page_root"}>
        <div className={"main_page_top"}>
          <h1>Heyo</h1>
        </div>
        <div className={"main_page_bottom"}>
          <h2>Nope</h2>
        </div>
      </div>
    );
  }
}

export default new HomePage();