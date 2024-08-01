import React from "react";
import styles from "../../styles/home.module.css"

const RockLayout = ({ children }: { children: React.ReactNode }) => {
  return (
   <section className={styles.background}>
      {children}
   </section>
  );
};

export default RockLayout;
