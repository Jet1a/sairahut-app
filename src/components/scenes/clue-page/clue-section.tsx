"use client";

import { useEffect, useState } from "react";
import UserCode from "./user-code";
import Stages from "./stages";
import ClueBox from "./cluebox";
import { useSearchParams } from "next/navigation";
import clues from "@/utils/clue";

const ClueSection = () => {
  const [hints, setHints] = useState([]);
  const searchParams = useSearchParams();
  const slug = searchParams.get("Id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/datas?Id=${slug}`);
        const data = await res.json();
        console.log(data.data[0]);
        setHints(data.data[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [slug]);

  return (
    <section className="flex flex-col justify-center items-center min-h-screen space-y-4">
      <UserCode id="G02" />
      <div className="flex justify-center items-center gap-2">
        {hints.slice(3).map((hint, index) => {
          const key = index;
          const number = index + 1;
          return index < 4 ? (
            <Stages key={key} number={number} available={true} />
          ) : (
            <Stages key={key} number={number} available={false} />
          );
        })}
        {hints.slice(3).length < 4 &&
          Array.from({ length: 4 - hints.slice(3).length }).map((_, index) => (
            <Stages
              key={index + hints.slice(3).length}
              number={index + hints.slice(3).length + 1}
              available={false}
            />
          ))}
      </div>
      <div className="text-center font-bold">
        {clues
          .filter((item) => item.name === hints[2])
          .map((clue, index) => (
            <h1 key={index} className={`text-6xl text-white ${clue.color}`}>
              {hints[2]}
            </h1>
          ))}
        <p className="text-xl mt-4">{hints[1]}</p>
      </div>
      <div className="">
        <span>This is your clues :</span>
        <div className="flex flex-col space-y-4 mt-4">
          {hints
            .slice(3)
            .map((hint, index) =>
              index < 4 ? <ClueBox key={index} clue={hint} /> : null
            )}
        </div>
      </div>
    </section>
  );
};

export default ClueSection;
