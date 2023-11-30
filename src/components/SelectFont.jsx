'use client';
import { useState } from 'react';
import { fonts } from '@/constants';
import { styles } from '@/styles';

const SelectFont = ({ onClickFont }) => {
  const [selectedFont, setSelectedFont] = useState(fonts[11].name);
  const [showFont, setShowFont] = useState(fonts[11].name);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFontSelect = (font) => {
    setSelectedFont(font);
    setIsDropdownOpen(false);
    // onClickFont(font);
  };

  return (
    <div className='flex w-full flex-col gap-2'>
      <label className={`${styles.label}`}>Fuente</label>
      <div className='w-full p-2'>
        <button
          onClick={toggleDropdown}
          className={`flex w-64 items-center justify-between rounded-md border bg-white px-4 py-2 shadow-md outline-none focus:outline-none ${selectedFont}`}
          onChange={handleFontSelect}
          style={selectedFont ? { fontFamily: selectedFont } : {}}
        >
          {showFont}
          <svg
            className={`ml-2 h-5 w-5 ${
              isDropdownOpen ? 'rotate-180' : ''
            } transition-all duration-300 ease-linear`}
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M5.293 6.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <ul
            className={`absolute z-10 mt-2 w-64 rounded-md border bg-white shadow-lg backdrop-blur-sm`}
          >
            {fonts.map((font) => (
              <li
                key={font.id}
                onClick={() => {
                  handleFontSelect(font.font);
                  setShowFont(font.name);
                  onClickFont(font.fontTailwind);
                }}
                className={`cursor-pointer px-4 py-2 hover:bg-cornflower-500 hover:text-white ${
                  selectedFont === font.font
                    ? ` text-cornflower-800`
                    : `text-gray-500 `
                } ${font.fontTailwind}`}
              >
                {font.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SelectFont;
