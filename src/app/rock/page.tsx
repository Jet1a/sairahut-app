import RockSection from "@/components/scenes/rock-page/[slug]/rock-section";
import styles from "@/styles/home.module.css";
import { Suspense } from "react";
const Rock = () => {
  return (
    <main className={styles.background}>
      <Suspense >
        <RockSection />
      </Suspense>
    </main>
  );
};

export default Rock;
