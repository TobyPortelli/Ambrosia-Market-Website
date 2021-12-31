import { AllPages, AllPagesMap } from "../routes";
import { PageWrapper } from "../components/PageWrapper";

class UserProfile {
  private currentPage: PageWrapper;

  setCurrentPage(pageName: string): boolean {
    if (this.currentPage == null || pageName != this.currentPage.name) {
      this.currentPage = AllPagesMap.get(pageName);
      return true;
    } else {
      return false;
    }
  }
}

export default new UserProfile();