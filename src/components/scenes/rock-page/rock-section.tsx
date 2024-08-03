"use client";

import { useState } from "react";
import Image from "next/image";
import rock1 from "../../../../public/images/rockgif/p1.gif";
import rock2 from "../../../../public/images/rockgif/p2.gif";
import rock3 from "../../../../public/images/rockgif/p3.gif";
import rock4 from "../../../../public/images/rockgif/p4.gif";
import jewelry from "../../../../public/images/jewels/emerald.png";
import styles from "../../../styles/rock.module.css";
type Props = {};
const RockSection = (props: Props) => {
  const [rockImage, setRockImage] = useState(rock1);
  const [clickCount, setClickCount] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [showJewelry, setShowJewelry] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const rockImages = [rock1, rock2, rock3, rock4];
  const clickThresholds = [5, 10, 15, 15];

  const handleClick = () => {
    setClickCount((prev) => {
      const newClickCount = prev + 1;

      const newImageIndex = clickThresholds.findIndex(
        (threshold) => newClickCount <= threshold
      );

      if (newImageIndex === -1) {
        setRockImage(rock4);
        setAnimate(true);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            setShowJewelry(true);
            setFadeOut(false);
          }, 200);
        }, 1000);
      } else {
        setRockImage(rockImages[newImageIndex]);
        setAnimate(true);
        setTimeout(() => setAnimate(false), 200);
      }

      return newClickCount;
    });
  };

  return (
    <section className="flex flex-col items-center justify-center space-y-2">
      <div className={styles.fall}>
        {showJewelry ? (
          <div className="flex flex-col gap-4">
            <h1 className="text-center text-6xl font-bold text-green-500">
              Emerald
            </h1>
            <Image
              src={jewelry}
              alt="jewelry"
              className={styles.pop}
              width={300}
              height={300}
            />
          </div>
        ) : (
          <Image
            src={rockImage}
            alt="rock"
            onClick={handleClick}
            className={`cursor-pointer ${animate ? styles.animate : " "} ${
              fadeOut ? styles.fadeOut : ""
            }`}
            width={300}
            height={300}
          />
        )}
      </div>
      <div className="text-center space-y-4">
        <h1
          className={`text-6xl font-bold ${
            showJewelry ? "text-green-500" : " "
          }`}
        >
          IT30
        </h1>
        <p className={`font-semibold ${showJewelry ? "text-green-500" : " "}`}>
          CODE OF UNDER WORLD&apos;S TREASURE
        </p>
      </div>
    </section>
  );
};

export default RockSection;
