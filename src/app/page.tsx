'use client'

import HomeSection from "@/components/scenes/home-page/home-section";
import Preloader from "@/components/scenes/preloader/preloader";
import { Suspense, useEffect, useState } from "react";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Suspense fallback={<Preloader/>}>
      {loading ? <Preloader /> : <HomeSection />}
    </Suspense>
  );
};

export default Index;
