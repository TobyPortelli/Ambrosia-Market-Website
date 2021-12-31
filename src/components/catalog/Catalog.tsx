import * as React from "react";
import "../../assets/scss/AItems.scss";
import Header from "../header/Header";
import { catalog, pageInfo } from "../../routes";
import { ImgCatalog } from "../ImageHandling";


class Catalog implements pageInfo {
  private static getSearchBar() {
    return (<>
      <div className={"aitems_search_bar_segment"}>
        <div className={"aitems_search_bar_container"}>
          {Catalog.getSearchBarLine()}
          {Catalog.getSearchBarLine()}
          {Catalog.getSearchBarLine()}
        </div>
      </div>
    </>);
  }

  private static getSearchBarLine() {
    return (
      <>
        <div className={"aitems_search_bar_line"}>
          <div className={"aitems_search_bar_block_100_container"}>
            <div className={"aitems_search_bar_block_100"}>
            <span className={"text_normal"}>
                <span>
                  {Catalog.getSearchBox()}
                </span>
            </span>
            </div>
          </div>
        </div>
      </>
    );
  }

  private static getSearchBox() {
    return (
      <>
        <div className={"search_box"}>
          <div className={"search_box_text"}>
            <input className={"aitems_search_bar_search"} type="text" placeholder="Search..." />
          </div>
          <div className={"search_box_button_container"}>
            <button type={"submit"} className={"search_box_button"} aria-label={"Search!"}>
              <text>Search!</text>
            </button>
          </div>
        </div>

      </>
    );
  };

  getImage(): HTMLImageElement {
    return ImgCatalog;
  };

  getTitle(): string {
    return "Catalog";
  };

  getDescription(): string {
    return "Analyze item statistics";
  };

  component(): JSX.Element {
    return (
      <>
        {Header.getNavHeader(catalog)}
        {Catalog.getSearchBar()}
      </>
    );
  };
}

export default new Catalog();
