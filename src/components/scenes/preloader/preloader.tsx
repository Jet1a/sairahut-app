
import Image from "next/image";
import styles from "../../../styles/preloader.module.css";

const Preloader = () => {
  return (
    <div
      className={`${styles.background} flex flex-col min-h-screen justify-center items-center`}
    >
      <div className={styles.mascot}>
        <Image src="/images/gif.gif" alt="mascot" width={300} height={300} priority={true}/>
      </div>
    </div>
  );
};

export default Preloader;
