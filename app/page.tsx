import HomeTitle from "@/features/home-page-title/ui/HomePageTitle";
import HomePageLayout from "@/pages/home-page/ui/HomePageLayout";
import HomePageFooter from "@/pages/home-page/ui/HomePageFooter";
import HomePageContent from "@/features/home-page-content/ui/HomePageContent";

export default async function Homepage() {
  return (
    <HomePageLayout>
      <HomeTitle />
      <HomePageContent />
      <HomePageFooter />
    </HomePageLayout>
  );
}
