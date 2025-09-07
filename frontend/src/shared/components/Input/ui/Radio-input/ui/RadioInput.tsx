
import clsx from "clsx";
import type { IRadioInputProps } from "../model";
import css from './index.module.scss';


export const RadioInput: React.FC<IRadioInputProps> = ({id, label, ...props}) => {
  return (
    <div className={css.input_wrapper}>
      <input type="radio" aria-label={label} id={id} {...props} className={clsx(css.input, css.radio)} />
      <label htmlFor={id} className={css.label_text}>{label}</label>
    </div>
  )
}

