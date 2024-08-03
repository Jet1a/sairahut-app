import RockSection from "@/components/scenes/rock-page/rock-section";
import React from "react";

type Props = {};

const Rock = (props: Props) => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center space-y-2 ">
      <RockSection />
    </div>
  );
};

export default Rock;
