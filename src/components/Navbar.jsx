'use client';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import Link from 'next/link';
import BtnLink from './Buttons/BtnLink';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { navLinks } from '@/constants';
import { useScrollNavbar } from '@/hooks/useScrollNavbar';
import Image from 'next/image';
import { useShowComponent } from '@/hooks/useShowComponent';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const scrollToTop = useScrollToTop();
  const scrolled = useScrollNavbar();
  const showComponent = useShowComponent();

  if (!showComponent) return null;

  return (
    <header
      className={`fixed top-0 z-10 w-full bg-wattle-50/95 backdrop-blur-lg ${
        scrolled ? ' shadow-lg' : ''
      }`}
    >
      <nav className='mx-auto flex w-full max-w-7xl items-center justify-between p-4'>
        <Link href='/' className='w-20' onClick={scrollToTop}>
          <Image
            src='https://res.cloudinary.com/dxbbbewxt/image/upload/v1701296397/FestiDisg/logo-festidisg_w3ir0n.webp'
            alt='logo'
            className='h-full w-full'
            width={200}
            height={200}
          />
        </Link>
        <div className='hidden items-center justify-center gap-4 md:flex'>
          {navLinks.map((link) => (
            <Link
              // to={link.path}
              href={link.path}
              key={link.id}
              className='text-wattle-800 hover:text-cornflower-800'
              onClick={scrollToTop}
            >
              {link.name}
            </Link>
          ))}
          <BtnLink />
        </div>
        {!toggle ? (
          <IconMenu2
            className='block cursor-pointer md:hidden'
            onClick={handleToggle}
          />
        ) : (
          <IconX className='cursor-pointer md:hidden' onClick={handleToggle} />
        )}

        {toggle && (
          <div
            className={
              'absolute left-0 top-10 flex w-full flex-col items-center gap-4 bg-wattle-50/95 backdrop-blur-lg py-4 shadow-lg md:hidden'
            }
          >
            {navLinks.map((link) => (
              <Link
                // to={link.path}
                href={link.path}
                key={link.id}
                className='text-wattle-800 hover:text-cornflower-800'
                onClick={() => {
                  scrollToTop();
                  setToggle(!toggle);
                }}
              >
                {link.name}
              </Link>
            ))}
            <BtnLink />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
