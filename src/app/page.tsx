import React from "react";
import styles from "../styles/home.module.css";
import HomeSection from "@/components/scenes/home-page/home-section";
import HomeInput from "@/components/scenes/home-page/home-input";
type Props = {};

const Index = (props: Props) => {
  return (
    <main className={styles.background}>
      <section className="h-screen w-full flex flex-col items-center justify-center space-y-2">
        <div className={styles.popup}>
          <HomeSection />
          <HomeInput />
        </div>
      </section>
    </main>
  );
};

export default Index;
