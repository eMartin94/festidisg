import { sendContactForm } from '@/libs/api';
import React, { useReducer } from 'react';
import { useForm, Controller } from 'react-hook-form';

const initValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

const initialState = {
  loading: false,
  success: false,
  errors: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, loading: true };
    case 'STOP_LOADING':
      return { ...state, loading: false };
    case 'SET_SUCCESS':
      return { ...state, success: action.payload };
    case 'SET_ERRORS':
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};

const ContactForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors: formErrors },
  } = useForm({
    defaultValues: initValues,
  });

  const onSubmit = async (data) => {
    dispatch({ type: 'START_LOADING' });

    try {
      const response = await sendContactForm(data);
      if (response.ok) {
        dispatch({ type: 'SET_SUCCESS', payload: true });
        reset(initValues);
      } else {
        console.error(
          'Error en el servidor al enviar el formulario:',
          response.error
        );
        dispatch({ type: 'SET_ERRORS', payload: response.error });
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    } finally {
      dispatch({ type: 'STOP_LOADING' });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <div className='flex flex-wrap gap-4 relative'>
        <div className='shrink grow basis-60 w-full'>
          <div className='mb-4 w-full'>
            <Controller
              // name='name'
              name='firstName'
              control={control}
              rules={{
                required: 'El nombre es obligatorio',
                minLength: {
                  value: 3,
                  message: 'El nombre debe tener al menos 3 caracteres',
                },
              }}
              defaultValue=''
              render={({ field }) => (
                <input
                  type='text'
                  placeholder='Nombre'
                  className={` w-full rounded-xl h-10 bg-cornflower-100 px-4 py-2 text-white outline-none ${
                    formErrors.firstName ? 'border-red-500 border-[1px]' : ''
                  }`}
                  {...field}
                />
              )}
            />
            {formErrors.firstName && (
              <p className='text-red-500 mt-2 text-xs'>
                {formErrors.firstName.message}
              </p>
            )}
          </div>

          <div className='w-full'>
            <Controller
              name='lastName'
              control={control}
              rules={{
                required: 'El apellido es obligatorio',
                minLength: {
                  value: 3,
                  message: 'El apellido debe tener al menos 3 caracteres',
                },
              }}
              defaultValue=''
              render={({ field }) => (
                <input
                  type='text'
                  placeholder='Apellido'
                  className={` w-full rounded-xl h-10 bg-cornflower-100 px-4 py-2 text-white outline-none ${
                    formErrors.lastName ? 'border-red-500 border-[1px]' : ''
                  }`}
                  {...field}
                />
              )}
            />
            {formErrors.lastName && (
              <p className='text-red-500 mt-2 text-xs'>
                {formErrors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div className='shrink grow basis-60 w-full'>
          <div className='mb-4 w-full'>
            <Controller
              name='phone'
              control={control}
              rules={{
                required: 'El teléfono es obligatorio',
                pattern: {
                  value: /^\d{9}$/,
                  message: 'El teléfono debe tener 9 dígitos',
                },
              }}
              defaultValue=''
              render={({ field }) => (
                <input
                  type='tel'
                  placeholder='Teléfono'
                  className={` w-full rounded-xl h-10 bg-cornflower-100 px-4 py-2 text-white outline-none ${
                    formErrors.phone ? 'border-red-500 border-[1px]' : ''
                  }`}
                  {...field}
                />
              )}
            />
            {formErrors.phone && (
              <p className='text-red-500 mt-2 text-xs'>
                {formErrors.phone.message}
              </p>
            )}
          </div>

          <div className='w-full'>
            <Controller
              name='email'
              control={control}
              rules={{
                required: 'El correo electrónico es obligatorio',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'El correo electrónico no es válido',
                },
              }}
              defaultValue=''
              render={({ field }) => (
                <input
                  type='email'
                  placeholder='Correo electrónico'
                  className={` w-full rounded-xl h-10 bg-cornflower-100 px-4 py-2 text-white outline-none ${
                    formErrors.email ? 'border-red-500 border-[1px]' : ''
                  }`}
                  {...field}
                />
              )}
            />
            {formErrors.email && (
              <p className='text-red-500 mt-2 text-xs'>
                {formErrors.email.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <Controller
        name='message'
        control={control}
        rules={{
          required: 'El mensaje es obligatorio',
          minLength: {
            value: 10,
            message: 'El mensaje debe tener al menos 10 caracteres',
          },
        }}
        defaultValue=''
        render={({ field }) => (
          <textarea
            placeholder='Mensaje'
            rows={4}
            className={`resize-none rounded-xl bg-cornflower-100 px-4 py-2 text-white outline-none ${
              formErrors.message ? 'border-red-500 border-[1px]' : ''
            }`}
            {...field}
          />
        )}
      />
      {formErrors.message && (
        <p className='text-red-500 -mt-1 text-xs'>
          {formErrors.message.message}
        </p>
      )}

      <button
        type='submit'
        disabled={state.loading}
        className='mt-4 rounded-3xl bg-gradient-to-br from-cornflower-500 to-cornflower-800 px-4 py-2 text-white hover:from-cornflower-800 hover:to-cornflower-800 transition-all duration-300 ease-linear disabled:from-cornflower-500 disabled:to-cornflower-500 disabled:cursor-wait'
      >
        {state.loading ? (
          <span className='animate-pulse'>Enviando...</span>
        ) : (
          <span>Enviar</span>
        )}
      </button>
      <p className='ml-2 mt-4 text-xs text-white'>
        Sus datos personales serán tratados de acuerdo con la{' '}
        <a href='#'> Política de privacidad</a>
      </p>
    </form>
  );
};

export default ContactForm;
