import React from "react";
import { FaLock } from "react-icons/fa";

interface ClueLockProps {
  number: number;
  available: boolean;
}

const Stages = ({ available, number }: ClueLockProps) => {
  return (
    <div className="w-12 h-12 flex justify-center items-center bg-white rounded-full cursor-pointer">
      {available ? <span>{number}</span> : <FaLock />}
    </div>
  );
};

export default Stages;
