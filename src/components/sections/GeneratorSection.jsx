'use client';

import BtnCancelar from '@/components/Buttons/BtnCancelar';
import BtnDownload from '@/components/Buttons/BtnDownload';
import BtnReset from '@/components/Buttons/BtnReset';
import BtnSave from '@/components/Buttons/BtnSave';
import ImagePreview from '@/components/ImagePreview';
import PhrasesCard from '@/components/PhrasesCard';
import SelectFont from '@/components/SelectFont';
import SkeletonImgGenerator from '@/components/SkeletonImgGenerator';
import ThemesCard from '@/components/ThemesCard';
import { fonts, phrases, social, templates } from '@/constants';
import { generateRandomName } from '@/utils/generateRandomName';
import { IconChevronLeft } from '@tabler/icons-react';
import html2canvas from 'html2canvas';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const GenerateSection = () => {
  const [inputValue, setInputValue] = useState('');
  const previewRef = useRef(null);
  const [selectedPhrase, setSelectedPhrase] = useState(phrases[0].description);
  const [selectedTheme, setSelectedTheme] = useState({
    image: templates[0].image,
    name: templates[0].name,
  });
  const [selectedFont, setSelectedFont] = useState(fonts[11].fontTailwind);
  const [loading, setLoading] = useState(false);

  const [saveEnable, setSaveEnable] = useState(false);
  const [showBtnDownload, setShowBtnDownload] = useState(false);
  const [inputDisable, setInputDisable] = useState(false);

  useEffect(() => {
    inputValue !== '' ? setSaveEnable(true) : setSaveEnable(false);
  }, [inputValue]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }, []);

  const handleSaveEnable = () => {
    setShowBtnDownload(true);
    setInputDisable(true);
    setSaveEnable(false);
  };

  const handleCancel = () => {
    setInputDisable(false);
    setSaveEnable(false);
  };

  const handlePhraseClick = (text) => {
    setSelectedPhrase(text);
  };
  const handleThemeClick = (theme) => {
    setSelectedTheme(theme);
  };
  const handleFontSelect = (font) => {
    setSelectedFont(font);
  };

  const handleDownload = () => {
    const element = previewRef.current;
    const randomName = generateRandomName(7);
    if (!element && !randomName) return;

    html2canvas(element, {
      backgroundColor: null,
    })
      .then((canvas) => {
        let image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = `${selectedTheme.name}_${randomName}.png`;
        link.click();
      })
      .catch((err) => {
        console.log(err);
        alert('Ha ocurrido un error al descargar la imagen');
        return;
      });
  };

  const handleReset = () => {
    setInputValue('');
    setSelectedPhrase(phrases[0].description);
    setSelectedTheme({ image: templates[0].image, name: templates[0].name });
    setShowBtnDownload(false);
    setSaveEnable(false);
    setSelectedFont(fonts[11].fontTailwind);
    setInputDisable(false);
  };

  return (
    <>
      {loading ? (
        <div className='grid min-h-screen w-full grid-cols-1 lg:grid-cols-2'>
          <div
            className={`relative top-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-wattle-50 p-8 lg:sticky lg:h-screen`}
          >
            <div className='mt-4 flex w-full items-center justify-start gap-4'>
              <Link href='/' className='group flex gap-1 text-wattle-800'>
                <IconChevronLeft className='translate-x-0 transition-all  duration-300 ease-linear group-hover:-translate-x-1' />{' '}
                volver
              </Link>
            </div>
            <ImagePreview
              previewRef={previewRef}
              selectedPhrase={selectedPhrase}
              selectedTheme={selectedTheme.image}
              nameTheme={selectedTheme.name}
              inputValue={inputValue}
              setInputValue={setInputValue}
              fontSelect={selectedFont}
              disabledInput={inputDisable}
            />

            <div className='mb-8 flex flex-col w-full items-center gap-4 justify-center py-2'>
              <div className='flex flex-wrap gap-4 w-full max-w-[450px] items-center justify-center'>
                <BtnSave
                  onClickSave={handleSaveEnable}
                  disabled={!saveEnable}
                />
                <BtnCancelar
                  onClickCancelar={handleCancel}
                  disabled={saveEnable}
                />
              </div>
              <div className='flex flex-col gap-4'>
                {showBtnDownload && (
                  <>
                    <BtnDownload onClickDownload={handleDownload} />{' '}
                    <BtnReset
                      onClickReset={handleReset}
                      // disabled={showBtnDownload}
                    />
                  </>
                )}
              </div>
            </div>
            <div className='absolute bottom-4 left-0 flex w-full items-center justify-center gap-2 lg:bottom-10'>
              {social.map((item, index) => (
                <a
                  href={item.link}
                  key={index}
                  target='_blank'
                  rel='noreferrer'
                >
                  <item.icon className='text-wattle-500 hover:text-wattle-800' />
                </a>
              ))}
            </div>
          </div>
          <div className='flex min-h-screen w-full flex-col items-start justify-center gap-4 overflow-auto bg-cornflower-50 p-8'>
            <ThemesCard
              onClickTheme={handleThemeClick}
              selectedTheme={selectedTheme.name}
            />
            <SelectFont onClickFont={handleFontSelect} />
            <PhrasesCard
              onClickPhrase={handlePhraseClick}
              fontSelected={selectedFont}
            />
          </div>
        </div>
      ) : (
        <SkeletonImgGenerator />
      )}
    </>
  );
};

export default GenerateSection;
