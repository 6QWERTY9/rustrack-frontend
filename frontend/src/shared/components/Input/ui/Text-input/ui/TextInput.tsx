import clsx from "clsx";
import type { ITextInputProps } from "../model";
import css from './index.module.scss';
import { useState } from "react";

import { ReactSVG } from "react-svg";

export const TextInput: React.FC<ITextInputProps> = ({label, error, ...props}) => {
  const [inputVal, setInputVal] = useState('');
  return (
    <div className={css.input_wrapper}>
      {label && (
        <label htmlFor={props.id} aria-label={label} className={clsx(css.label)}>
          {label}
        </label>
      )}
      <input type="text" placeholder={props.placeholder} onChange={(e) => setInputVal(e.target.value)} value={inputVal} className={clsx(css.input, css.text)} />
      {inputVal && (
        <ReactSVG src="./svg/close.svg" onClick={() => setInputVal('')} className={css.cross}/>
      )}
      {error && (
          <span className={clsx(css.error_massage)}>
            {error}
          </span>
      )}
    </div>
  )
}
