'use client';
import { styles } from '@/styles';

const SkeletonImgGenerator = () => {
  return (
    <div className='grid min-h-screen w-full grid-cols-1 lg:grid-cols-2 '>
      <div
        className={`relative top-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-wattle-50 p-8 lg:sticky lg:h-screen `}
      >
        <div className='mt-4 flex w-full items-center justify-start gap-4'>
          {/* <span className='w-24 h-4 bg-wattle-500 rounded-lg animate-pulse'></span> */}
        </div>
        <div className='flex h-auto w-full items-center justify-center py-2 xl:w-[640px]'>
          <div className={`${styles.flexCenter} relative`}>
            {/* <div
              className={`${styles.widthPreview} absolute top-0 rounded-2xl shadow-xl bg-wattle-500 animate-pulse`}
            ></div> */}
            <div
              id='preview'
              className={`widthPreview relative overflow-hidden rounded-2xl bg-wattle-500 animate-pulse`}
            ></div>
          </div>
        </div>

        <div className='mb-8 flex w-full items-center justify-center py-2'>
          <div className='w-full max-w-[280px] h-10 bg-wattle-500 rounded-3xl animate-pulse'></div>
        </div>
        <div className='absolute bottom-4 left-0 flex w-full items-center justify-center gap-2 lg:bottom-10'></div>
      </div>
      <div className='flex min-h-screen w-full flex-col items-start justify-center gap-4 overflow-hidden bg-cornflower-50 p-8 '>
        <div className='flex w-full flex-col gap-2'>
          <span className='w-24 h-4 bg-cornflower-500 rounded-lg'></span>
          <div className='overflow-none whitespace-nowrap p-2'>
            {[...Array(4).keys()].map((item, index) => (
              <div
                key={index}
                className={`group mb-2 mr-2 inline-block bg-cornflower-500 h-28 w-28 cursor-pointer overflow-hidden rounded-lg  shadow-md last:mr-0 transition-all duration-300 ease-linear animate-pulse`}
              ></div>
            ))}
          </div>
        </div>
        <div className='flex w-full flex-col gap-2'>
          <span className='w-24 h-4 bg-cornflower-500 rounded-lg animate-pulse'></span>
          <div className='w-full max-w-[250px] h-10 bg-cornflower-500 p-2 rounded-lg animate-pulse'>
            <p
              className={`text-sm bg-cornflower-800 w-full h-4 rounded-lg transition-all duration-300 ease-in-out animate-pulse`}
            ></p>
          </div>
        </div>
        <div className='flex h-full w-full flex-col gap-2 '>
          <span className='w-24 h-4 bg-cornflower-500 rounded-lg animate-pulse'></span>
          <div
            id='myphrase'
            className='grid h-auto w-full grid-cols-1 gap-4 overflow-auto p-2 sm:grid-cols-2'
          >
            {[...Array(6).keys()].map((phrase, index) => (
              <div
                key={index}
                className='group h-24 w-full cursor-pointer rounded-bl-3xl rounded-tr-3xl bg-cornflower-500 p-4 shadow-md transition-all duration-300 ease-in-out animate-pulse'
              >
                <p
                  className={`text-sm bg-cornflower-800 w-full h-4 rounded-lg transition-all duration-300 ease-in-out animate-pulse`}
                ></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonImgGenerator;
