import clsx from 'clsx';
import type { ICheckboxInputProps } from '../model';
import css from './index.module.scss';

export const CheckboxInput: React.FC<ICheckboxInputProps> = ({ id, label, ...props }) => {
    return (
    <div className={css.wrapper}>
        <label htmlFor={id}  />
        <input type="checkbox" aria-label={label} id={id} className={clsx(css.input, css.checkbox)} {...props} />
    </div>
    )
};
