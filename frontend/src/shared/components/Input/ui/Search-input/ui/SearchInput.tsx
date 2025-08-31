import clsx from 'clsx';
import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import type { ISearchInputProps } from '../model';
import css from './index.module.scss';

export const SearchInput: React.FC<ISearchInputProps> = ({ value: externalValue, placeholder = 'Поиск', onChange, ...props }) => {
  const [internalValue, setInternalValue] = useState(externalValue || '');
  const value = externalValue !== undefined ? externalValue : internalValue;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInternalValue(newValue);
    onChange?.(newValue);
  }

  return (
    <div className={css.input_wrapper}>
      <ReactSVG src='./svg/search.svg'/>
      <input type="search" value={value} onChange={handleChange} placeholder={placeholder} className={clsx(css.input_layout, css.search_input)} {...props} />
    </div>
  )
};
