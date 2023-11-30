import HomeSection from '@/components/sections/HomeSection';

export const metadata = {
  title: 'Inicio | FestiDisg',
  description:
    'Da vida a tus saludos festivos con nuestras plantillas. ¡Deja que tus imágenes hablen por sí mismas!',
  keywords:
    'festidisg, imágenes, saludos festivos, plantillas, creatividad visual, diseño',
  author: 'eMartinDev',
};

const HomePage = () => {
  return (
    <main className='min-h-screen w-full'>
      <HomeSection />
    </main>
  );
};

export default HomePage;
