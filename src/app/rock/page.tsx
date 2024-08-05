import RockSection from "@/components/scenes/rock-page/[slug]/rock-section";
import styles from "@/styles/home.module.css"
const Rock = () => {
  return (
    <main className={styles.background}>
      <RockSection />
    </main>
  );
};

export default Rock;
