'use client';

const BtnSecondary = ({ disabled, cancel }) => {
  return (
    <button
      type='button'
      className={`btn border-transparent bg-transparent text-wattle-800 hover:text-wattle-500 max-h-10`}
      disabled={disabled}
      onClick={cancel}
    >
      Restaurar
    </button>
  );
};

export default BtnSecondary;
