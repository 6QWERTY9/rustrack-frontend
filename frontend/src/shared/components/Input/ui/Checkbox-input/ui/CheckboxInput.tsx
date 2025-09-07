import clsx from 'clsx';
import type { ICheckboxInputProps } from '../model';
import css from './index.module.scss';

export const CheckboxInput: React.FC<ICheckboxInputProps> = ({ id, label, sizeCheckbox='normal', ...props }) => {
    return (
    <div className={css.wrapper}>
        <input type="checkbox" aria-label={label} id={id} className={clsx(css.input, css.checkbox, css[sizeCheckbox])} {...props} />
        <label htmlFor={id} className={css.label_text}>{label}</label>
    </div>
    )
};
