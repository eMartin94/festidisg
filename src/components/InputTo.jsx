import { titleDefault, titleTheme } from '@/styles';

const InputTo = ({ value, onChange, nameTheme, isExpanded, disabledInput }) => {
  return (
    <textarea
      id='miInput'
      value={value}
      onChange={onChange}
      maxLength={20}
      className={`z-10 h-7 bg-transparent outline-none xs:h-10 nameToCard
      ${isExpanded ? 'expanded' : ''} ${titleTheme[nameTheme] || titleDefault}`}
      style={{ textTransform: 'uppercase' }}
      placeholder='Escribe aquí...'
      disabled={disabledInput}
    />
  );
};

export default InputTo;
