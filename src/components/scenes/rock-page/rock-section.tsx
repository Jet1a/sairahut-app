"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import rock1 from "../../../../public/images/rock1.png";
import rock2 from "../../../../public/images/rock2.png";
import rock3 from "../../../../public/images/rock3.png";
import rock4 from "../../../../public/images/rock4.png";
import styles from "../../../styles/rock.module.css";
type Props = {};
const RockSection = (props: Props) => {
  const [rockImage, setRockImage] = useState(rock1); // Initial image
  const [clickCount, setClickCount] = useState(0);
  const [animate, setAnimate] = useState(false);

  const rockImages = [rock1, rock2, rock3, rock4];
  const clickThresholds = [5, 10, 15, 20];

  const handleClick = () => {
    setClickCount((prev) => {
      const newClickCount = prev + 1;

      const newImageIndex = clickThresholds.findIndex(
        (threshold) => newClickCount <= threshold
      );

      if (newImageIndex === -1) {
        setRockImage(rock4);
      } else {
        setRockImage(rockImages[newImageIndex]);
      }

      setAnimate(true);
      setTimeout(() => setAnimate(false), 200);

      return newClickCount;
    });
  };

  const isUnClickable = rockImage === rock4;

  return (
    <section>
      <Image
        src={rockImage}
        alt="rock"
        onClick={!isUnClickable ? handleClick : undefined}
        className={`cursor-pointer ${animate ? styles.animate : " "}`}
        width={300}
        height={300}
      />
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold">IT30</h1>
        <p className="font-semibold">CODE OF UNDER WORLD&apos;S TREASURE</p>
      </div>
    </section>
  );
};

export default RockSection;
