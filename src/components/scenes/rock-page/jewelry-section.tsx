import Image, { StaticImageData } from "next/image";

interface JewelryProps {
  name: string;
  src: StaticImageData;
  color: string;
}
const JewelrySection = ({ name, src, color }: JewelryProps) => {
  return (
    <>
      <h1
        className={`text-center text-6xl font-bold ${color} uppercase`}
      >
        {name}
      </h1>
      <Image
        src={src}
        alt="jewelry"
        width={250}
        height={250}
        className="mb-4"
      />
    </>
  );
};

export default JewelrySection;
