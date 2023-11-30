'use client';
import { templates } from '@/constants';
import { styles } from '@/styles';
import Image from 'next/image';

const ThemesCard = ({ onClickTheme, selectedTheme }) => {
  const handleTheme = (theme) => {
    onClickTheme(theme);
  };

  return (
    <div className='flex w-full flex-col gap-2'>
      <label className={`${styles.label}`}>Temas</label>
      <div className='overflow-auto whitespace-nowrap p-2'>
        {templates.map((item) => (
          <div
            key={item.id}
            className={`group mb-2 mr-2 inline-block h-28 w-28 cursor-pointer overflow-hidden rounded-lg border-[2px] shadow-md last:mr-0 hover:border-cornflower-800 ${
              selectedTheme === item.name ? ' border-cornflower-800' : ''
            } transition-all duration-300 ease-linear`}
            onClick={() => handleTheme({ image: item.image, name: item.name })}
          >
            <Image
              className='h-full w-full scale-100 object-cover transition-all duration-300 ease-linear group-hover:scale-105'
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemesCard;
