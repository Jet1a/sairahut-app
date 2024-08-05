import HomeSection from "@/components/scenes/home-page/home-section";
import Preloader from "@/components/scenes/preloader/preloader";
import { Suspense } from "react";

const Index = () => {

  return (
    <Suspense fallback={<Preloader/>}>
      <HomeSection />
    </Suspense>
  );
};

export default Index;
