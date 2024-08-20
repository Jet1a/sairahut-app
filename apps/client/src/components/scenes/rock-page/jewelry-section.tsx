import Image, { StaticImageData } from "next/image";

interface JewelryProps {
  name: string;
  src: StaticImageData;
  color: string;
}
const JewelrySection = ({ name, src, color }: JewelryProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <h1 className="text-gold drop-shadow-glow text-5xl">Good Job!</h1>
      <div className="relative w-[300px] h-[300px]">
      <Image
        src={src}
        alt="jewelry"
        fill
      />
      </div>
      <span className="text-rock text-bold text-md">You&apos;ve got</span>
      <h1 className={`text-5xl font-bold text-white ${color}`}>
        {name}
      </h1>
    </div>
  );
};

export default JewelrySection;