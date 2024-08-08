"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import rocks from "@/utils/rock";
import jewelrys from "@/utils/jewelry";
import { useSearchParams, useRouter } from "next/navigation";
import styles from "@/styles/rock.module.css";
import JewelrySection from "./jewelry-section";

const RockSection = () => {
  const [rockImage, setRockImage] = useState(rocks.rock1);
  const [clickCount, setClickCount] = useState(0);
  const [jewelColor, setJewelColor] = useState("");
  const [animate, setAnimate] = useState(false);
  const [showJewelry, setShowJewelry] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const rockImages = [rocks.rock1, rocks.rock2, rocks.rock3, rocks.rock4];
  const clickThresholds = [5, 10, 15, 15];

  useEffect(() => {
    if (showJewelry) {
      setTimeout(() => {
        router.push("/house");
      }, 3000);
    }
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/datas?slug=${slug}`);
        const data = await res.json();
        if (data.data.length <= 0) {
          console.error("Data is empty!");
          router.push("/");
        }
        setJewelColor(data.data[0][2]);
        console.log(data.data[0][2]);
      } catch (error) {
        console.error("Error fetching data!", error);
        throw new Error("Error fethcing data!")
      }
    };
    fetchData();
  }, [slug, router, showJewelry]);

  const handleClick = () => {
    setClickCount((prev) => {
      const newClickCount = prev + 1;
      const newImageIndex = clickThresholds.findIndex(
        (threshold) => newClickCount <= threshold
      );

      if (newImageIndex === -1) {
        setRockImage(rocks.rock4);
        setAnimate(true);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            setShowJewelry(true);
            setFadeOut(false);
          }, 300);
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
    <section className="h-screen w-full flex flex-col items-center justify-center space-y-2 ">
      <div className={styles.fall}>
        {showJewelry ? (
          <div
            className={`${styles.pop} flex flex-col gap-4 justify-center items-center`}
          >
            {jewelrys
              .filter((jewel) => jewel.name === jewelColor)
              .map((jewel, index) => (
                <JewelrySection
                  key={index}
                  name={jewel.name}
                  src={jewel.src}
                  color={jewel.color}
                />
              ))}
          </div>
        ) : (
          <Image
            src={rockImage}
            alt="rock"
            onClick={handleClick}
            className={`cursor-pointer ${animate ? styles.animate : ""} ${
              fadeOut ? styles.fadeOut : ""
            }`}
            width={300}
            height={300}
            unoptimized={false}
            priority={true}
          />
        )}
      </div>
      <div className="text-center space-y-4">
        <h1 className={`text-6xl font-bold`}>IT30</h1>
        <p className={`font-semibold`}>CODE OF UNDER WORLD&apos;S TREASURE</p>
      </div>
    </section>
  );
};

export default RockSection;
