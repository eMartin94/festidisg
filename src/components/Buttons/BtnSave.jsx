'use client';

const BtnSave = ({ onClickSave, disabled }) => {
  return (
    <button
      type='button'
      className={`btn border-wattle-500 bg-wattle-500 text-white`}
      disabled={disabled}
      onClick={onClickSave}
    >
      Guardar
    </button>
  );
};

export default BtnSave;
