import clsx from "clsx";
import type { ITextInputProps } from "../model";
import css from './index.module.scss';
import { ReactSVG } from "react-svg";

export const TextInput: React.FC<ITextInputProps> = ({ label, error, ...props }) => {
  return (
    <div className={css.input_wrapper}>
      {label && (
        <label htmlFor={props.id} aria-label={label} className={clsx(css.label, { [css.error_label]: error })}>
          {label}
        </label>
      )}
      <input
        type="text"
        placeholder={props.placeholder}
        {...props}  // ВАЖНО: прокидываем value, onChange, onBlur, name и т.п.
        className={clsx(css.input, css.text)}
      />
      {props.value && (
        <ReactSVG
          src="./svg/close.svg"
          onClick={() => {
            if (props.onChange) {
              // Сбрасываем значение через onChange с пустой строкой
              const event = {
                target: { name: props.name, value: '' }
              };
              props.onChange(event as any);
            }
          }}
          className={clsx(css.cross, { [css.error_cross]: error })}
        />
      )}
      {error && (
        <span className={clsx(css.error_massage)}>
          {error}
        </span>
      )}
    </div>
  );
};

