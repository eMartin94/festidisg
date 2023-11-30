import Link from 'next/link';

const BtnLink = () => {
  return (
    <Link
      href='/generate-image'
      className='rounded-3xl bg-gradient-primary px-4 py-2 text-white shadow-sm scale-100 hover:scale-105 transition-all duration-300 ease-linear'
    >
      Empezar ahora
    </Link>
  );
};

export default BtnLink;
