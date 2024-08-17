import Image from "next/image";
import React from "react";
import styles from "../../styles/home.module.css"

const LoadingScene = () => {
  return (
    <div
      className={`${styles.background} flex flex-col min-h-screen justify-center items-center`}
    >
      <h1 className="text-2xl text-white text-shadow-glow">Wait a minute!!!</h1>
      <div className="w-[300px] h-[300px] relative">
        <Image
          src="/images/reducegif.gif"
          alt="mascot"
          width={300}
          height={300}
          priority={true}
          unoptimized={true}
        />
      </div>
    </div>
  );
};

export default LoadingScene;
