import React from "react";
import UserCode from "./user-code";
import Stages from "./stages";
import ClueBox from "./cluebox";

const ClueSection = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen space-y-4">
      <UserCode id={"G02"} />
      <div className="flex justify-center items-center gap-2">
        <Stages available={true} number={1} />
        <Stages available={false} number={2} />
        <Stages available={false} number={3} />
        <Stages available={false} number={4} />
      </div>
      <div className="text-center font-bold">
        <h1 className="text-6xl text-white drop-shadow-md">Jadeliny</h1>
        <p className="text-xl mt-2">นางสาวกุ๊กกิ๊ก ไม่อยากทำงาน</p>
      </div>
      <div className="">
        <span>This is your clues :</span>
        <div className="flex flex-col space-y-4 mt-4">
          <ClueBox clue="mockup clue hint"/>
          <ClueBox clue="mockup clue hint"/>
          <ClueBox clue="mockup clue hint"/>
          <ClueBox clue="mockup clue hint"/>
        </div>
      </div>
    </section>
  );
};

export default ClueSection;
