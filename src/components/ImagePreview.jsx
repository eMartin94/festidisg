'use client';
import {
  styles,
  paragraphDefault,
  paragraphTheme,
  topDefault,
  topTheme,
} from '@/styles';
import { useState } from 'react';
import InputTo from './InputTo';
import Image from 'next/image';

const ImagePreview = ({
  previewRef,
  selectedPhrase,
  selectedTheme,
  nameTheme,
  inputValue,
  setInputValue,
  fontSelect,
  disabledInput,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    const textarea = e.target;
    textarea.style.height = '0px';
    textarea.style.height = `${textarea.scrollHeight}px`;

    if (textarea.scrollHeight > 200) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  };

  return (
    <div className='flex h-auto w-full items-center justify-center py-2 xl:w-[640px]'>
      <div className={`${styles.flexCenter} relative`}>
        <div
          className={`widthPreview absolute top-0 rounded-2xl shadow-xl`}
        ></div>
        <div
          id='preview'
          ref={previewRef}
          className={`widthPreview relative overflow-hidden rounded-2xl`}
        >
          {/* <img
            src={selectedTheme}
            alt={nameTheme}
            className='h-full w-full object-cover'
          /> */}
          <Image
            src={selectedTheme}
            alt={nameTheme}
            className='h-full w-full object-cover'
            width={300}
            height={300}
          />
          <div
            className={`${styles.flexCenter} absolute w-full flex-col ${
              topTheme[nameTheme] || topDefault
            } transition-all duration-300 ease-linear`}
          >
            <div className='relative flex w-full items-center justify-center xs:w-60'>
              <InputTo
                value={inputValue.toUpperCase()}
                onChange={handleInputChange}
                isExpanded={isExpanded}
                nameTheme={nameTheme}
                disabledInput={disabledInput}
              />
            </div>
            <p
              className={`phraseCard leading-3 xs:leading-normal ${
                paragraphTheme[nameTheme] || paragraphDefault
              } ${fontSelect}`}
            >
              {selectedPhrase}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
