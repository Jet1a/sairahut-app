'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import rocks from '@/utils/rock';
import jewelrys from '@/utils/jewelry';
import { useSearchParams, useRouter } from 'next/navigation';
import styles from '@/styles/rock.module.css';
import JewelrySection from './jewelry-section';

const rockImages = [rocks.rock1, rocks.rock2, rocks.rock3, rocks.rock4];
const clickThresholds = [15, 30, 50, 50];

const RockSection = () => {
  const [rockImage, setRockImage] = useState(rocks.rock1);
  const [clickCount, setClickCount] = useState(0);
  const [jewelColor, setJewelColor] = useState('');
  const [animate, setAnimate] = useState(false);
  const [showJewelry, setShowJewelry] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get('Id');

  useEffect(() => {
    if (showJewelry) {
      setTimeout(() => {
        router.push(`/house?Id=${slug}`);
      }, 3000);
    }
    const fetchData = async () => {
      try {
        const res = await fetch(`api/users/getUser?student_id=${slug}`);
        const data = await res.json();
        setJewelColor(data.data.house_name);
      } catch (error) {
        console.error('Error fetching data!', error);
        router.push('/');
      }
    };
    fetchData();
  }, [slug, router, showJewelry]);

  const handleClick = () => {
    setClickCount((prev) => {
      const newClickCount = prev + 1;
      const newImageIndex = clickThresholds.findIndex(
        (threshold) => newClickCount <= threshold,
      );

      if (newImageIndex === -1) {
        setRockImage(rocks.rock4);
        setAnimate(true);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            setShowJewelry(true);
            setFadeOut(false);
          }, 300);
        }, 1000);
      } else {
        setRockImage(rockImages[newImageIndex]);
        setAnimate(true);
        setTimeout(() => setAnimate(false), 200);
      }

      return newClickCount;
    });
  };

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center space-y-2 ">
      <div>
        {showJewelry ? (
          <div
            className={`${styles.pop} flex flex-col gap-4 justify-center items-center`}
          >
            {jewelrys
              .filter((jewel) => jewel.name === jewelColor)
              .map((jewel, index) => (
                <JewelrySection
                  key={index}
                  name={jewel.name}
                  src={jewel.src}
                  color={jewel.color}
                />
              ))}
          </div>
        ) : (
          <div className="flex flex-col text-center items-center">
            <div className={`w-[300px] h-[300px] relative ${styles.fall}`}>
              <Image
                src={rockImage}
                alt="rock"
                onClick={handleClick}
                className={`cursor-pointer ${animate ? styles.animate : ''} ${
                  fadeOut ? styles.fadeOut : ''
                }`}
                fill
                unoptimized={true}
                priority={true}
              />
            </div>
            <div className={`text-center space-y-4 text-rock font-bold`}>
              <span>tap the screen to see the surprise!</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RockSection;