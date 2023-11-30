'use client';
import { phrases } from '@/constants';
import { styles } from '@/styles';

const PhrasesCard = ({ onClickPhrase, fontSelected }) => {
  const handlePhrase = (text) => {
    onClickPhrase(text);
  };
  return (
    <div className='flex h-full w-full flex-col gap-2'>
      <label className={`${styles.label}`}>Frases</label>
      <div
        id='myphrase'
        // className='flex flex-col gap-2 w-full max-h-[500px] overflow-auto p-2'
        className='grid h-full w-full grid-cols-1 gap-4 overflow-auto p-2 sm:grid-cols-2'
      >
        {phrases.map((phrase) => (
          <div
            key={phrase.id}
            className='group h-auto w-full cursor-pointer rounded-bl-3xl rounded-tr-3xl bg-white p-4 shadow-md transition-all duration-300 ease-in-out hover:bg-cornflower-500'
            onClick={() => handlePhrase(phrase.description)}
          >
            <p
              className={`text-sm text-black transition-all duration-300 ease-in-out group-hover:text-white ${fontSelected}`}
            >
              {phrase.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhrasesCard;
