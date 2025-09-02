/* 
import clsx from 'clsx';
import type { RadioInputProps } from './model';
import css from './index.module.scss';

export const RadioInput: React.FC<RadioInputProps> = ({
    label,
    id,
    ...props
}) => (
    <div className={clsx(css.wrapper, wrapperClassName, className)}>
        <label htmlFor={id} className={clsx(css.label, labelClassName)}>
            <input
                type="radio"
                id={id}
                className={clsx(css.input, inputClassName)}
                {...props}
            />
            <span className={clsx(css.custom_radio, customRadioClassName)}></span>
            {label && (
                <span className={clsx(css.text, textClassName)}>
                    {label}
                </span>
            )}
        </label>
    </div>
);


*/
