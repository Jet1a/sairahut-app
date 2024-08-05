import Image from "next/image";
import pink from "../../../../public/images/hmascot/pink.png";
import green from "../../../../public/images/hmascot/green.png";
import orange from "../../../../public/images/hmascot/orange.png";
import yellow from "../../../../public/images/hmascot/yellow.png";
import red from "../../../../public/images/hmascot/red.png";
import blue from "../../../../public/images/hmascot/blue.png";
import styles from "@/styles/home.module.css";

const HouseSection = () => {
  return (
    <section
      className={`${styles.popup} flex flex-col justify-center items-center min-h-screen`}
    >
      <div>
        <h1 className="text-center text-6xl font-bold text-green-500">
          Emerald
        </h1>
        <Image src={green} alt="house-mascot" width={350} height={350} />
      </div>
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold">IT30</h1>
        <p className="font-semibold">CODE OF UNDER WORLD&apos;S TREASURE</p>
      </div>
    </section>
  );
};

export default HouseSection;
