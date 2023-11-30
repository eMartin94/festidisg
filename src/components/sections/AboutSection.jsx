'use client';
import { useAnimateAboutSection } from '@/hooks/useGsapAnimation';
import { styles } from '@/styles';
import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  useAnimateAboutSection();
  return (
    <section className='h-full w-full bg-wattle-50 px-4 py-8 xs:px-8 xs:py-16 about-section overflow-hidden'>
      <div
        className={`${styles.flexCenter} about-reveal mx-auto mb-16 h-full w-full max-w-7xl flex-col gap-4 pt-20 md:flex-row`}
      >
        <div className='flex flex-col items-center justify-center md:items-start'>
          <h2 className='mb-4 text-center text-4xl font-semibold md:text-start'>
            Acerca de Nosotros
          </h2>
          <p className='text-center md:text-start'>
            ¡Bienvenido a <b>FestiDisg</b>! Somos un equipo apasionado dedicado
            a hacer que tus momentos especiales sean aún más memorables. Nuestra
            misión es proporcionarte herramientas creativas y accesibles para
            expresar tus emociones a través de imágenes vibrantes y mensajes
            significativos.
          </p>
        </div>
        <div className={`hidden w-full justify-end items-center md:flex`}>
          <Image
            src='https://res.cloudinary.com/dxbbbewxt/image/upload/v1701296651/FestiDisg/about-us_wt9jyl.webp'
            alt='image-3'
            className='w-auto'
            priority={true}
            width={300}
            height={300}
          />
        </div>
      </div>
      <div
        className={`${styles.flexCenter} about-reveal mx-auto mb-16 h-full w-full max-w-7xl flex-col gap-4 md:flex-row`}
      >
        <div className={`hidden w-full justify-start items-center md:flex`}>
          <Image
            src='https://res.cloudinary.com/dxbbbewxt/image/upload/v1701296651/FestiDisg/about-us_wt9jyl.webp'
            alt='image-3'
            className='w-auto'
            priority={true}
            width={300}
            height={300}
          />
        </div>
        <div className='flex flex-col items-center justify-center md:items-start'>
          <h2 className='mb-4 text-center text-4xl font-semibold md:text-start'>
            Nuestra Inspiración
          </h2>
          <p className='text-center md:text-start'>
            Nos inspira la alegría que brindan las celebraciones y la
            importancia de compartir momentos especiales con aquellos que
            amamos. Creemos que cada ocasión merece ser conmemorada de una
            manera única y personalizada.
          </p>
        </div>
      </div>
      <div
        className={`${styles.flexCenter} about-reveal mx-auto mb-16 h-full w-full max-w-7xl flex-col gap-4`}
      >
        <h2 className='mb-4 text-center text-4xl font-semibold'>
          Lo Que Ofrecemos
        </h2>
        <p className='w-full text-center md:max-w-[80%]'>
          En <b>FestiDisg</b>, te ofrecemos una colección diversa de plantillas
          diseñadas cuidadosamente para diversas festividades, desde Navidad y
          Año Nuevo hasta eventos especiales como el Día de la Madre y mucho
          más. Queremos que encuentres la inspiración y la herramienta perfecta
          para que tus saludos festivos destaquen.
        </p>
      </div>
      <div
        className={`${styles.flexCenter} mx-auto h-full w-full max-w-7xl flex-wrap gap-4`}
      >
        <div className='about-reveal-card flex h-[450px] w-full max-w-sm flex-col items-center gap-4 rounded-lg bg-white translate-y-40 opacity-0 px-4 py-8'>
          <div className='mb-2 h-28 w-28'>
            <Image
              src='https://res.cloudinary.com/dxbbbewxt/image/upload/v1701296650/FestiDisg/brain_i0xc2k.png'
              alt='brain'
              className='h-full w-full object-cover'
              width={300}
              height={300}
            />
          </div>
          <h3 className='text-center text-xl font-semibold'>
            Tu Toque Personal
          </h3>
          <p className='text-center text-sm'>
            Entendemos la importancia de la individualidad, por lo que te
            brindamos opciones de personalización ilimitadas. Desde colores y
            fuentes hasta detalles específicos, cada diseño puede adaptarse a tu
            estilo único. Queremos que cada imagen que crees refleje
            auténticamente quien eres.
          </p>
        </div>
        <div className='about-reveal-card flex h-[450px] w-full max-w-sm flex-col items-center gap-4 rounded-lg bg-white translate-y-40 opacity-0 px-4 py-8 '>
          <div className='mb-2 h-28 w-28'>
            <Image
              src='https://res.cloudinary.com/dxbbbewxt/image/upload/v1701296650/FestiDisg/creativity_izndwe.png'
              alt='creativity'
              className='h-full w-full object-cover'
              width={300}
              height={300}
            />
          </div>
          <h3 className='text-center text-xl font-semibold'>
            Facilidad Creativa
          </h3>
          <p className='text-center text-sm'>
            Sabemos que el tiempo es valioso, por lo que hemos desarrollado
            herramientas intuitivas que te permiten diseñar en minutos. Con
            <b> FestiDisg</b>, maximiza tu creatividad sin complicaciones y haz
            que cada momento cuente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
