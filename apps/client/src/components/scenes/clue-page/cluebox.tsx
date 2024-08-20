import React from "react";

interface ClueBoxProps {
  clue: string;
}

const ClueBox = ({ clue }: ClueBoxProps) => {
  return (
    <div className="w-[275px] h-11 bg-white flex justify-center items-center rounded-lg shadow-2xl cursor-default">
      <span>{clue}</span>
    </div>
  );
};

export default ClueBox;