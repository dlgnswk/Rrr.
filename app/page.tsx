import HomeTitle from "@/features/home-page-title/ui/HomePageTitle";
import HomePageLayout from "@/views/home-page/ui/HomePageLayout";
import HomePageFooter from "@/views/home-page/ui/HomePageFooter";
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
