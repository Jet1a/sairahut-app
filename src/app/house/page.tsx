import HouseSection from "@/components/scenes/house-page/house-section";
import styles from "@/styles/home.module.css";
import { Suspense } from "react";

const House = () => {
  return (
    <main className={styles.background}>
      <Suspense fallback={<div>Loading . . . </div>}>
        <HouseSection />
      </Suspense>
    </main>
  );
};

export default House;
