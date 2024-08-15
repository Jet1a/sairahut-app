
import HouseSection from "@/components/scenes/house-page/house-section";
import styles from "@/styles/home.module.css";
import { Suspense } from "react";

const House = () => {

  return (
    <main className={styles.background}>
    
        <HouseSection />

    </main>
  );
};

export default House;
