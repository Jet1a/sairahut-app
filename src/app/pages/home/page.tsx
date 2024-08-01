import HomeInput from "@/components/scenes/home-page/home-input";
import HomeSection from "@/components/scenes/home-page/home-section";
import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center space-y-2">
      <HomeSection />
      <HomeInput />
    </section>
  );
};

export default HomePage;
