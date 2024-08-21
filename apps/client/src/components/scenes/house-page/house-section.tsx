'use client';

import mascots from '@/utils/mascot';
import styles from '@/styles/home.module.css';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import MascotSection from './mascot-section';
import { IoMdDownload } from 'react-icons/io';

const HouseSection = () => {
  const [mascot, setMascot] = useState('');

  const searchParams = useSearchParams();
  const slug = searchParams.get('Id');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`api/users/getUser?student_id=${slug}`);
        const data = await res.json();
        setMascot(data.data.house_name);
        console.log(mascots);
      } catch (error) {
        console.error('Error fetching data!', error);
        throw new Error('Error fethcing data!');
      }
    };
    fetchData();
  }, [slug]);

  return (
    <section
      className={`${styles.pop} flex flex-col justify-center items-center min-h-screen`}
    >
      {mascots
        .filter((item) => item.name === mascot)
        .map((mascot, index) => (
          <div
            key={index}
            className="text-center font-bold flex flex-col items-center justify-center"
          >
            <h1 className="text-2xl text-gold drop-shadow-glow">
              Congratulation!
            </h1>
            <MascotSection
              key={index}
              name={mascot.name}
              src={mascot.src}
              color={mascot.color}
            />
            <a
              href={mascot.href.src}
              download={`${mascot.name}.png`}
              className="inline-block p-2 mt-4 bg-amber-300 text-white rounded-full hover:bg-amber-400 transition duration-300"
            >
              <IoMdDownload className="w-8 h-8 text-black" />
            </a>
          </div>
        ))}
    </section>
  );
};

export default HouseSection;
