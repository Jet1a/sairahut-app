'use client';

import { useEffect, useState } from 'react';
import UserCode from './user-code';
import Stages from './stages';
import ClueBox from './cluebox';
import { useSearchParams } from 'next/navigation';
import clues from '@/utils/clue';
import { Mitr } from 'next/font/google';


const mitr = Mitr({
  subsets: ['thai'],
  weight: ['400'],
});

interface DataProps {
  student_id: string;
  name: string;
  house_name: string;
  code: string;
  hint_1: string;
  hint_2: string;
  hint_3: string;
  hint_4: string;
}

const ClueSection = () => {
  const [data, setData] = useState<DataProps>();
  const [stage, setStage] = useState(1);
  const searchParams = useSearchParams();
  const slug = searchParams.get('Id');

  const hints = [data?.hint_1, data?.hint_2, data?.hint_3, data?.hint_4];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`api/users/getUser?student_id=${slug}`);
        const data = await res.json();
        console.log(data.data);
        setData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [slug]);

  const handleStageClick = (stageNumber: number) => {
    setStage(stageNumber);
  };

  return (
    <section className="flex flex-col justify-center items-center min-h-screen space-y-4">
      <UserCode id={data?.code ?? 'NaN'} />
      <div className="flex justify-center items-center gap-2">
        {hints.map((hint, index) =>
          hint !== undefined ? (
            <Stages
              key={index}
              number={index + 1}
              available={true}
              currentState={stage}  
              onClick={() => handleStageClick(index + 1)}
            />
          ) : (
            <Stages key={index} number={index + 1} available={false}/>
          ),
        )}
      </div>
      <div className="text-center font-bold">
        {clues
          .filter((item) => item.name === data?.house_name)
          .map((clue, index) => (
            <h1 key={index} className={`text-6xl text-white ${clue.color}`}>
              {data?.house_name}
            </h1>
          ))}
        <p className={`${mitr.className} text-xl mt-4`}>น้อง {data?.name}</p>
      </div>
      <div className="">
        <span>This is your clues :</span>
        <div className={`${mitr.className} flex flex-col space-y-4 mt-4`}>
          {hints[stage - 1] && <ClueBox clue={hints[stage - 1] ?? ''} />}
        </div>
      </div>
    </section>
  );
};

export default ClueSection;
