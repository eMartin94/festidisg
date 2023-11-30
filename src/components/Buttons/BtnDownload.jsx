'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap, Elastic } from 'gsap';

const BtnDownload = ({ onClickDownload }) => {
  const buttonRef = useRef(null);
  const svgRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const getPath = (update, smoothing, pointsNew) => {
      const points = pointsNew
        ? pointsNew
        : [
            [4, 12],
            [12, update],
            [20, 12],
          ];

      const d = points.reduce(
        (acc, point, i, a) =>
          i === 0
            ? `M ${point[0]},${point[1]}`
            : `${acc} ${getPoint(point, i, a, smoothing)}`,
        ''
      );

      return `<path d="${d}" />`;
    };

    const button = buttonRef.current;
    const svg = svgRef.current;

    let duration = 3000;

    const svgPath = new Proxy(
      {
        y: null,
        smoothing: null,
      },
      {
        set(target, key, value) {
          target[key] = value;
          if (target.y !== null && target.smoothing !== null) {
            svg.innerHTML = getPath(target.y, target.smoothing, null);
          }
          return true;
        },
        get(target, key) {
          return target[key];
        },
      }
    );

    button.style.setProperty('--duration', duration);

    svgPath.y = 20;
    svgPath.smoothing = 0;

    const handleClick = (e) => {
      e.preventDefault();

      // if (!button.classList.contains('loading')) {
      if (!isAnimating && !button.classList.contains('loading')) {
        button.classList.add('loading');

        gsap.to(svgPath, {
          smoothing: 0.3,
          duration: (duration * 0.065) / 1000,
        });

        gsap.to(svgPath, {
          y: 12,
          duration: (duration * 0.265) / 1000,
          delay: (duration * 0.065) / 1000,
          ease: Elastic.easeOut.config(1.12, 0.4),
          onComplete: () => {
            setIsAnimating(true);
            setTimeout(() => {
              setIsAnimating(false);
              button.classList.remove('loading');
              svg.innerHTML = getPath(20, 0, null); // Restaura el estado inicial
            }, 4000);
          },
        });

        setTimeout(() => {
          svg.innerHTML = getPath(0, 0, [
            [3, 14],
            [8, 19],
            [21, 6],
          ]);
        }, duration / 2);
      }
    };

    button.addEventListener('click', handleClick);

    return () => {
      button.removeEventListener('click', handleClick);
    };
  }, [isAnimating]);

  const getPoint = (point, i, a, smoothing) => {
    const cp = (current, previous, next, reverse) => {
      const p = previous || current;
      const n = next || current;
      const o = {
        length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
        angle: Math.atan2(n[1] - p[1], n[0] - p[0]),
      };
      const angle = o.angle + (reverse ? Math.PI : 0);
      const length = o.length * smoothing;
      return [
        current[0] + Math.cos(angle) * length,
        current[1] + Math.sin(angle) * length,
      ];
    };

    const cps = cp(a[i - 1], a[i - 2], point, false);
    const cpe = cp(point, a[i - 1], a[i + 1], true);

    return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
  };

  return (
    <button
      type='button'
      href=''
      className={`button flex overflow-hidden bg-cornflower-500 rounded-3xl shadow-lg active:scale-95 active:shadow-md transition-all duration-300 ease-linear ${
        isAnimating ? 'loading disabled:cursor-wait' : ''
      }`}
      ref={buttonRef}
      disabled={isAnimating}
      onClick={onClickDownload}
    >
      <ul className='m-0 py-4 px-10 list-none text-center relative text-base font-medium leading-7 text-white'>
        <li className='[&:not(:first-child)]:top-4 [&:not(:first-child)]:left-0 [&:not(:first-child)]:right-0 [&:not(:first-child)]:absolute [&:nth-child(2)]:top-[76px] [&:nth-child(3)]:top-[136px]'>
          Descargar
        </li>
        <li className='[&:not(:first-child)]:top-4 [&:not(:first-child)]:left-0 [&:not(:first-child)]:right-0 [&:not(:first-child)]:absolute [&:nth-child(2)]:top-[76px] [&:nth-child(3)]:top-[136px]'>
          Descargando
        </li>
        <li className='[&:not(:first-child)]:top-4 [&:not(:first-child)]:left-0 [&:not(:first-child)]:right-0 [&:not(:first-child)]:absolute [&:nth-child(2)]:top-[76px] [&:nth-child(3)]:top-[136px]'>
          Completado
        </li>
      </ul>
      <div className='relative w-[60px] h-[60px] border-l-[1px] border-cornflower-800 bg-cornflower-500 before:content-[""] before:block before:absolute after:content-[""] after:block after:absolute before:w-[2px] before:rounded-[1px] before:top-1/2 before:left-1/2 before:h-[17px] before:m-[-9px_0px_0px_-1px] before:bg-white after:w-[60px] after:h-[60px] after:origin-[50%_0%] after:rounded-[0px_0px_80%_80%] after:bg-cornflower-800 after:top-0 after:left-0 after:scale-0'>
        <svg
          ref={svgRef}
          viewBox='0 0 24 24'
          className='block absolute w-5 h-5 left-1/2 top-1/2 m-[-9px_0px_0px_-10px] fill-none z-[1] stroke-2 stroke-white'
        ></svg>
      </div>
    </button>
  );
};

export default BtnDownload;
