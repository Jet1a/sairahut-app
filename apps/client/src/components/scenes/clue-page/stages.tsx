import React from 'react';
import { FaLock } from 'react-icons/fa';

interface ClueLockProps {
  number: number;
  available: boolean;
  currentState?: number;
  onClick?: () => void;
}

const Stages = ({
  available,
  number,
  currentState,
  onClick,
}: ClueLockProps) => {
  const bgStyle =
    currentState === number
      ? 'bg-white'
      : available
        ? 'bg-slate-800/40'
        : 'bg-black/70';

  return (
    <div
      onClick={onClick}
      className={`w-12 h-12 flex justify-center items-center rounded-full cursor-pointer ${bgStyle}`}
    >
      {available ? (
        <span className="text-xl">{number}</span>
      ) : (
        <FaLock className="text-white" />
      )}
    </div>
  );
};

export default Stages;