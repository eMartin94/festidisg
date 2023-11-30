'use client';
import BtnLink from '../Buttons/BtnLink';
import Image from 'next/image';
import { styles } from '@/styles';
import { useAnimateHomeSection } from '@/hooks/useGsapAnimation';
import { useLennis } from '@/hooks/useLennis';

const HomeSection = () => {
  useAnimateHomeSection();
  useLennis();
  return (
    <>
      <section className='h-screen w-full bg-wattle-50 px-8'>
        <div
          className={`${styles.flexCenter} mx-auto h-full w-full max-w-7xl flex-col pt-20 md:flex-row`}
        >
          <div className='home-reveal-one flex flex-col items-center justify-center gap-4 translate-y-60 opacity-0 md:items-start'>
            <h1 className='mb-2 bg-gradient-primary bg-clip-text text-center text-5xl font-bold uppercase text-transparent sm:text-6xl md:text-start'>
              has que tus imágenes hablen
            </h1>
            <p className='mb-8 max-w-lg text-center text-lg md:text-start'>
              Da vida a tus saludos festivos con nuestras plantillas. ¡Deja que
              tus imágenes hablen por sí mismas!
            </p>
            <BtnLink />
          </div>

          <div className='home-reveal-one hidden flex-col justify-center translate-y-60 opacity-0 md:flex'>
            <Image
              src='https://res.cloudinary.com/dxbbbewxt/image/upload/v1701201751/FestiDisg/logo-festidisg_fmjenl.png'
              alt='image-1'
              className='w-full'
              priority={true}
              width={728}
              height={700}
            />
          </div>
        </div>
      </section>

      <section className='h-full w-full bg-white px-8 py-16 home-section-two'>
        <div
          className={`${styles.flexCenter} mx-auto h-full w-full max-w-7xl flex-col overflow-hidden md:flex-row px-2`}
        >
          <div
            className={`home-reveal-two w-full translate-y-60 items-center justify-start opacity-0`}
          >
            <Image
              src='https://res.cloudinary.com/dxbbbewxt/image/upload/v1701296526/FestiDisg/image-1_d9xopq.webp'
              alt='image-1'
              className='w-full max-w-[620px]'
              width={500}
              height={500}
            />
          </div>
          <div className='home-reveal-two flex translate-y-60 flex-col items-center justify-center opacity-0 md:items-start'>
            <h2 className='mb-4 bg-gradient-primary bg-clip-text text-center text-3xl font-bold uppercase text-transparent sm:text-4xl md:text-start'>
              ¡Difunde la alegría de las celebraciones de manera instantánea!
            </h2>
            <p className='mb-4 max-w-lg text-center md:text-start'>
              Descarga y comparte tus creaciones fácilmente en redes sociales o
              envíalas directamente a tus amigos y familiares.
            </p>
            <BtnLink />
          </div>
        </div>
      </section>

      <section className='h-full w-full bg-cornflower-50 px-8 py-16 home-section-three '>
        <div
          className={`${styles.flexCenter} mx-auto h-full w-full max-w-7xl flex-col-reverse overflow-hidden md:flex-row px-2`}
        >
          <div className='home-reveal-three flex translate-y-60 flex-col items-center opacity-0 md:items-start'>
            <h2 className='mb-4 bg-gradient-primary bg-clip-text text-center text-3xl font-bold uppercase text-transparent sm:text-4xl md:text-start'>
              Maximiza tu creatividad sin perder tiempo.
            </h2>
            <p className='mb-4 max-w-lg text-center md:text-start'>
              Actualizamos regularmente nuestras plantillas para asegurarnos de
              que siempre tengas opciones frescas y emocionantes.
            </p>
            <BtnLink />
          </div>
          <div className='home-reveal-three mb-8 flex w-full translate-y-60 items-center justify-end opacity-0 md:mb-0'>
            <Image
              src='https://res.cloudinary.com/dxbbbewxt/image/upload/v1701296526/FestiDisg/image-2_czzvxi.webp'
              alt='image-2'
              className='w-full max-w-[620px]'
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
