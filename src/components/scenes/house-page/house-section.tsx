"use client";

import mascots from "@/utils/mascot";
import styles from "@/styles/home.module.css";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import MascotSection from "./mascot-section";

const HouseSection = () => {
  const [mascot, setMascot] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();
  const slug = searchParams.get("Id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/datas?Id=${slug}`);
        const data = await res.json();
        setMascot(data.data[0][2]);
      } catch (error) {
        console.error("Error fetching data!", error);
        throw new Error("Error fethcing data!");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  const titleColor = mascots.find((item) => item.name === mascot)?.color;

  return (
    <section
      className={`${styles.pop} flex flex-col justify-center items-center min-h-screen`}
    >
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        mascots
          .filter((item) => item.name === mascot)
          .map((mascot, index) => (
            <MascotSection
              key={index}
              name={mascot.name}
              src={mascot.src}
              color={mascot.color}
            />
          ))
      )}
      {!isLoading && (
        <div className={`text-center space-y-4 ${titleColor}`}>
          <h1 className="text-6xl font-bold">IT30</h1>
          <p className="font-semibold">CODE OF UNDER WORLD&apos;S TREASURE</p>
        </div>
      )}
    </section>
  );
};

export default HouseSection;
