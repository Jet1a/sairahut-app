'use client';

import { useEffect, useState } from 'react';
import UserCode from './user-code';
import Stages from './stages';
import ClueBox from './cluebox';
import { useSearchParams } from 'next/navigation';
import clues from '@/utils/clue';

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
  const searchParams = useSearchParams();
  const slug = searchParams.get('Id');

  const hints = [data?.hint_1, data?.hint_2, data?.hint_3, data?.hint_4];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `api/users/getUser?student_id=${slug}`,
        );
        const data = await res.json();
        console.log(data.data);
        setData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [slug]);

  return (
    <section className="flex flex-col justify-center items-center min-h-screen space-y-4">
      <UserCode id={data?.code ?? 'G02'} />
      <div className="flex justify-center items-center gap-2">
        {hints.map((hint, index) => 
          hint !== null ?  <Stages key={index} number={index + 1} available={true} /> :  <Stages key={index} number={index + 1} available={false} /> 
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
        <p className="text-xl mt-4">{data?.name}</p>
      </div>
      <div className="">
        <span>This is your clues :</span>
        <div className="flex flex-col space-y-4 mt-4">
          {hints
            .map((hint, index) =>
              hint !== null ? <ClueBox key={index} clue={hint ?? 'No Clue Here'} /> : null,
            )}
        </div>
      </div>
    </section>
  );
};

export default ClueSection;
