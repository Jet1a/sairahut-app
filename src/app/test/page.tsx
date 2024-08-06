import React from "react";
import jewelry from "../../utils/jewelry";
import Image from "next/image";

const page = () => {
  return (
    <div>
      {jewelry.map((jewels, index) => (
        <>
          <h1>{jewels.name}</h1>
          <Image
            key={index}
            src={jewels.src}
            alt="jewels"
            width={300}
            height={300}
          />
        </>
      ))}
    </div>
  );
};

export default page;
