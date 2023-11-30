'use client';
import Link from 'next/link';
import { navLinks, social } from '@/constants';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import Image from 'next/image';
import { useShowComponent } from '@/hooks/useShowComponent';
import { imgLogo } from '@/config';

const Footer = () => {
  const scrollToTop = useScrollToTop();
  const showComponent = useShowComponent();

  if (!showComponent) return null;
  return (
    <footer className='flex w-full flex-col items-center justify-center gap-4 px-8 pb-8 pt-16'>
      <div className='mb-4 flex w-full flex-col items-center justify-around gap-4 md:flex-row'>
        <div className='w-32'>
          <Image
            src={imgLogo}
            alt='logo'
            width={150}
            height={150}
            className='w-full h-full'
          />
        </div>

        <ul className='flex gap-4'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.path}
                onClick={scrollToTop}
                className='text-gray-700 hover:text-black'
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className='flex gap-4'>
          {social.map((item, index) => (
            <li key={index} className=''>
              <a href={item.link} target='_blank' rel='noreferrer'>
                <item.icon className={`${item.name}`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col-reverse items-center justify-center gap-2 md:flex-row md:gap-8'>
        <p className='text-sm text-gray-500'>
          &copy; {new Date().getFullYear()} <span>FestiDisg</span>
        </p>
        <a href='#' className='text-sm text-gray-500'>
          Política de Privacidad
        </a>
        <a href='#' className='text-sm text-gray-500'>
          Términos y Condiciones
        </a>
      </div>
    </footer>
  );
};

export default Footer;
