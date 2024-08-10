import Image, { StaticImageData } from "next/image";

interface MascotProps {
  name: string;
  src: StaticImageData;
  color: string;
}

const MascotSection = ({ name, src, color }: MascotProps) => {
  return (
    <>
      <h1
        className={`text-center text-6xl font-bold ${color}`}
      >
        {name}
      </h1>
      <Image src={src} alt="house-mascot" width={350} height={350} priority={true} />
    </>
  );
};

export default MascotSection;
