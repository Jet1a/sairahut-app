import React from 'react';

interface ClueBoxProps {
  clue: string;
}

const ClueBox = ({ clue }: ClueBoxProps) => {
  return (
    <div className="bg-white text-center w-full max-w-[350px] rounded-lg shadow-2xl p-4">
      <p className="text-lg break-all">
        {clue}
      </p>
    </div>
  );
};

export default ClueBox;
