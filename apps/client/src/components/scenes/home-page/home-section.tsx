import Image from 'next/image';
import styles from '../../../styles/home.module.css';
import dynamic from 'next/dynamic';
import { DM_Serif_Text } from 'next/font/google';

const Nanum = DM_Serif_Text({
  subsets: ['latin'],
  weight: ['400'],
});

const HomeInput = dynamic(() => import('./home-input'), { ssr: false });

const HomeSection = () => {
  return (
    <main className={styles.background}>
      <section
        className={`${styles.popup} min-h-screen flex flex-col items-center justify-center space-y-2`}
      >
        <h1
          className={`text-center text-5xl font-black text-gold drop-shadow-gold ${Nanum.className}`}
          style={{
            textShadow:
              ' rgb(234, 191, 42) 1px 0px 0px, rgb(234, 191, 42) 0.540302px 0.841471px 0px, rgb(234, 191, 42) -0.416147px 0.909297px 0px, rgb(234, 191, 42) -0.989992px 0.14112px 0px, rgb(234, 191, 42) -0.653644px -0.756802px 0px, rgb(234, 191, 42) 0.283662px -0.958924px 0px, rgb(234, 191, 42) 0.96017px -0.279415px 0pxrgb(234, 134, 42) 1px 0px 0px, rgb(234, 134, 42) 0.540302px 0.841471px 0px, rgb(234, 134, 42) -0.416147px 0.909297px 0px, rgb(234, 134, 42) -0.989992px 0.14112px 0px, rgb(234, 134, 42) -0.653644px -0.756802px 0px, rgb(234, 134, 42) 0.283662px -0.958924px 0px, rgb(234, 134, 42) 0.96017px -0.279415px 0px',
          }}
        >
          THE CODE OF UNDERWORLD&apos;S TREASURE
        </h1>
        <div className="w-[300px] h-[250px] relative">
          <Image
            src="/images/mascotTiny.png"
            alt="mascot"
            fill
            priority={true}
            objectFit="contain"
          />
        </div>
        <HomeInput />
      </section>
    </main>
  );
};

export default HomeSection;
