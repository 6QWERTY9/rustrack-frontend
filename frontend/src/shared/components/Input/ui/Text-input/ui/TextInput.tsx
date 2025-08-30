import clsx from "clsx";
import type { ITextInputProps } from "../model";
import css from './index.module.scss';
import { useState } from "react";

export const TextInput: React.FC<ITextInputProps> = ({label, error, ...props}) => {
  const [inputVal, setInputVal] = useState('');
  return (
    <div>
      {label && (
        <label htmlFor={props.id} aria-label={label} className={clsx(css.label)}>
          {label}
        </label>
      )}
      <input type="text" placeholder={props.placeholder} />
      {error && (
          <span className={clsx(css.error_massage)}>
            {error}
          </span>
      )}
    </div>
  )
}
