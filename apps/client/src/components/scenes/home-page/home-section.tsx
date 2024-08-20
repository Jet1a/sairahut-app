import Image from "next/image";
import styles from "../../../styles/home.module.css";
import dynamic from "next/dynamic";

const HomeInput = dynamic(() => import("./home-input"), { ssr: false });

const HomeSection = () => {
  return (
    <main className={styles.background}>
      <section
        className={`${styles.popup} min-h-screen flex flex-col items-center justify-center space-y-2`}
      >
        <h1 className={`${styles.title}text-center text-4xl font-bold text-gold drop-shadow-glow`}>
          THE CODE OF UNDERWORLD&apos;S TREASURE
        </h1>
        <div className="w-[300px] h-[250px] relative">
          <Image
            src="/images/mascotTiny.png"
            alt="mascot"
            fill
            priority={true}
            objectFit="contain"
          />
        </div>
        <HomeInput />
      </section>
    </main>
  );
};

export default HomeSection;