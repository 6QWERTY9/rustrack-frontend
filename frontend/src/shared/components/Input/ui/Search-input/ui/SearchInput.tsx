import clsx from 'clsx';
import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import type { ISearchInputProps } from '../model';
import css from './index.module.scss';

export const SearchInput: React.FC<ISearchInputProps> = ({ value: externalValue, placeholder = 'Поиск', onChange, radius = false, ...props }) => {
  const [internalValue, setInternalValue] = useState(externalValue || '');
  const value = externalValue !== undefined ? externalValue : internalValue;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInternalValue(newValue);
    onChange?.(newValue);
  }

  return (
    <div className={css.input_wrapper}>
      <input type="search" value={value} onChange={handleChange} placeholder={placeholder} className={clsx(css.input, css.search, {[css.radius]: radius})} {...props} />
      <button className={clsx(css.search_button, {[css.radius]: radius})}>
        <ReactSVG src='./svg/search.svg' className={css.icon}/>

      </button>
    </div>
  )
};
