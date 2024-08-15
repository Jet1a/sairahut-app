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
        <h1 className="uppercase text-center text-4xl font-bold  text-amber-200 text-shadow-glow">
          The code of underworld&apos;s treasure
        </h1>
        <div className="w-[250px] h-[250px] relative">
          <Image
            src="/images/mascot2.png"
            alt="mascot"
            fill
            priority={true}
            unoptimized={true}
            objectFit="contain"
          />
        </div>
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold  text-amber-200 text-shadow-glow ">
            IT30
          </h1>
        </div>
        <HomeInput />
      </section>
    </main>
  );
};

export default HomeSection;
