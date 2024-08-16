import Image, { StaticImageData } from "next/image";

interface MascotProps {
  name: string;
  src: StaticImageData;
  color: string;
}

const MascotSection = ({ name, src, color }: MascotProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <span className="mt-2 text-md text-rock">
        You&apos;ve got
      </span>
      <h1
        className={`text-center text-6xl font-bold text-white ${color} text-shadow-orange`}
      >
        {name}
      </h1>
      <div className="w-[350px] h-[350px] relative">
        <Image
          src={src}
          alt="house-mascot"
          fill
          objectFit="contain"
          priority={true}
        />
      </div>
    </div>
  );
};

export default MascotSection;
