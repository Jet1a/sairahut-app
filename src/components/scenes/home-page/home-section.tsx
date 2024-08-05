"use client";

import Image from "next/image";
import styles from "../../../styles/home.module.css";

import dynamic from "next/dynamic";
import Preloader from "../preloader/preloader";
import { useEffect, useState } from "react";

const HomeInput = dynamic(() => import("./home-input"), { ssr: false });

const HomeSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <main className={styles.background}>
          <section
            className={`${styles.popup} h-screen w-full flex flex-col items-center justify-center space-y-2`}
          >
            <Image
              src="/images/mascot2.png"
              alt="mascot"
              width={300}
              height={300}
              priority={true}
            />
            <div className="text-center space-y-4">
              <h1 className="text-6xl font-bold">IT30</h1>
              <p className="font-semibold">
                CODE OF UNDER WORLD&apos;S TREASURE
              </p>
            </div>
            <HomeInput />
          </section>
        </main>
       )}
    </>
  );
};

export default HomeSection;
