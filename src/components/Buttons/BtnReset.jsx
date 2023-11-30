'use client';

const BtnReset = ({ onClickReset, disabled }) => {
  return (
    <button
      type='button'
      className={`btn border-transparent bg-transparent text-wattle-800 hover:text-wattle-500 max-h-10`}
      disabled={disabled}
      onClick={onClickReset}
    >
      Restaurar
    </button>
  );
};

export default BtnReset;
