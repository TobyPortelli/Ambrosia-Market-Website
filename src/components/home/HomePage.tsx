import { PageProps, PageWrapper } from "../PageWrapper";
import "../PageWrapperSS.scss";
import "../MainPageSS.scss";
import { useEffect, useMemo, useState } from "react";


class HomePage extends PageWrapper {
  constructor(props: PageProps) {
    super(props);
  }

  public createMainPage() {
    return (
      <div className={"main_page_root"}>
        <div className={"main_page_top"}>
          <h1>Heyo</h1>
        </div>
        <div className={"main_page_bottom"}>
        </div>
      </div>
    );
  }
}

interface ExampleProps {
  shouldDisplay: boolean;
  tonOfVars?: string;
}

const Example = (props: ExampleProps) => {
  const { shouldDisplay, tonOfVars } = props;
  useEffect(() => {
    console.log("getting hit");
  }, []);
  const usehere = useMemo(() => {
    return shouldDisplay ? "string of something" : "";
  }, [shouldDisplay]);
  return (
    <>
      <h1>{usehere}</h1>
    </>
  );
};

export default <HomePage name={"Home"} />;
