import { PageWrapper } from "../components/PageWrapper";

class UserProfile {
  private currentPage: PageWrapper;

  setCurrentPage(newPage: PageWrapper): boolean {
    if (this.currentPage == null || newPage.props.name != this.currentPage.props.name) {
      this.currentPage = newPage;
      return true;
    } else {
      return false;
    }
  }
}

export default new UserProfile();