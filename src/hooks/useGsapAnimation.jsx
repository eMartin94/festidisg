import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);
import { useMediaQuery } from '@react-hook/media-query';

export const useAnimateHomeSection = () => {
  useEffect(() => {
    let homeReveal = gsap.utils.toArray('.home-reveal-one');
    homeReveal.forEach((el, index) => {
      gsap.to(el, {
        autoAlpha: 1,
        y: 0,
        delay: 0.1 * index,
        stagger: 0.3,
      });
    });

    gsap.to('.home-reveal-two', {
      autoAlpha: 1,
      y: 0,
      delay: 0.3,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.home-section-two',
        start: 'top bottom',
        end: 'center center',
        scrub: 1.5,
      },
    });

    gsap.to('.home-reveal-three', {
      autoAlpha: 1,
      y: 0,
      delay: 0.3,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.home-section-three',
        start: 'top bottom',
        end: 'center center',
        scrub: 1.5,
      },
    });
  }, []);
};

export const useAnimateAboutSection = () => {
  useEffect(() => {
    let aboutReveal = gsap.utils.toArray('.about-reveal');
    aboutReveal.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          y: 100,
          delay: 0.5 * index,
          duration: 1.2,
          ease: 'power2.out',
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          delay: 0.3 * index,
          stagger: 0.3,
        }
      );
    });

    gsap.to('.about-reveal-card', {
      autoAlpha: 1,
      y: 0,
      delay: 0.3,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.about-section',
        start: 'center center',
        end: '60% center',
        scrub: 1.5,
        duration: 1.2,
      },
    });
  }, []);
};

export const useAnimateContactSection = () => {
  let isDesktop = useMediaQuery('(min-width: 768px)');
  let isMobile = useMediaQuery('(max-width: 767px)');
  useEffect(() => {
    const contactReveal = gsap.utils.toArray('.contact-reveal');
    contactReveal.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          y: isDesktop ? 0 : 100,
          x: isMobile ? 0 : 100,
          delay: 0.5 * index,
          duration: 1.2,
          ease: 'power2.out',
        },
        {
          autoAlpha: 1,
          y: 0,
          x: 0,
          duration: 1.2,
          ease: 'power2.out',
          delay: 0.3 * index,
          stagger: 0.3,
        }
      );
    });
  }, [isDesktop, isMobile]);

  return;
};
