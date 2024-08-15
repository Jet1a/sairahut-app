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
        console.log(mascots);
      } catch (error) {
        console.error("Error fetching data!", error);
        throw new Error("Error fethcing data!");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  return (
    <section
      className={`${styles.pop} flex flex-col justify-center items-center min-h-screen`}
    >
      {isLoading ? (
        <div>Devjin Don&apos;t Look!!!</div>
      ) : (
        mascots
          .filter((item) => item.name === mascot)
          .map((mascot, index) => (
            <>
              <div className="text-center font-bold">
                <h1
                  className="text-4xl text-amber-200 text-shadow-glow">
                  Congratulation!
                </h1>
                <p className="mt-2 text-xl">You&apos;ve got</p>
              </div>
              <MascotSection
                key={index}
                name={mascot.name}
                src={mascot.src}
                color={mascot.color}
              />
            </>
          ))
      )}
    </section>
  );
};

export default HouseSection;
