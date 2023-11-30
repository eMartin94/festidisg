'use client';

const BtnCancelar = ({ onClickCancelar, disabled }) => {
  return (
    <button
      type='button'
      className={`btn border-wattle-500 bg-transparent text-wattle-800 hover:text-wattle-500`}
      disabled={disabled}
      onClick={onClickCancelar}
    >
      Cancelar
    </button>
  );
};

export default BtnCancelar;
