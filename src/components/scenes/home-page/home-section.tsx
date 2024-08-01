"use client";

import Image from "next/image";
import mascot from "../../../../public/images/gif.gif";

interface HomeSectionProps {}

const HomeSection = (props: HomeSectionProps) => {
  return (
    <section>
        <Image src={mascot} alt="mascot" width={300} height={300} />
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold">IT30</h1>
        <p className="font-semibold">CODE OF UNDER WORLD&apos;S TREASURE</p>
      </div>
    </section>
  );
};

export default HomeSection;
