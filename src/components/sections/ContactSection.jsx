'use client';
import { styles } from '@/styles';
import { useAnimateContactSection } from '@/hooks/useGsapAnimation';
import ContactForm from '../form/ContactForm';

const ContactSection = () => {
  useAnimateContactSection();

  return (
    <section className='h-full w-full bg-wattle-50 px-4 py-8 xs:px-8 xs:py-16 overflow-hidden'>
      <div
        className={`${styles.flexCenter} mx-auto mb-16 h-full w-full max-w-7xl flex-col pt-20 md:flex-row`}
      >
        <div className='contact-reveal relative h-full w-[90%] overflow-hidden rounded-t-2xl bg-basic-bottom px-4 py-8 xs:px-8 md:h-[400px] md:w-1/2 md:rounded-l-2xl md:rounded-r-none md:bg-basic-rigth'>
          <h2 className='mb-4 text-3xl font-semibold capitalize tracking-tight'>
            contactanos
          </h2>
          <p className='w-full text-sm xs:max-w-[280px] sm:text-base lg:max-w-[300px]'>
            ¡Nos encantaría saber de ti! <br /> Si tienes preguntas, comentarios
            o simplemente quieres decir hola, estamos aquí para ayudarte.
          </p>
        </div>
        <div className='contact-reveal min-h-[450px] w-full rounded-2xl bg-cornflower-50 px-4 py-8 shadow-lg xs:px-8 md:w-1/2'>
          <h3 className='mb-4 text-xl font-semibold text-white'>
            Formulario de contacto
          </h3>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
