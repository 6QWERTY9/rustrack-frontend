import clsx from 'clsx';
import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import type { InputIconProps, InputLayoutProps } from '../model';
import css from './index.module.scss';

export const InputLayout: React.FC<InputLayoutProps> = ({ type, placeholder, id, label, className, ...props }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleClear = () => {
        setInputValue('');
    };

    const typeIcon = type === 'search' ? 'search' : 'cross';

    return (
        <fieldset className={css.input_wrapper}>
            {!['search', 'radio', 'checkbox'].includes(type) && (
                <label htmlFor={id} className={css.input_label}>
                    {label}
                </label>
            )}
            <input type={type} placeholder={placeholder} {...props} className={clsx(css.input_layout, css[className ? className : ''])} id={id} value={inputValue} onChange={handleChange} />
            {inputValue && <InputIcon type={typeIcon} onClick={handleClear} />}
        </fieldset>
    );
};

const InputIcon: React.FC<InputIconProps> = ({ type, onClick }) => {
    const typeIcon = type === 'cross';
    const className = clsx(css.icon, css[type]);

    return <>{typeIcon ? <ReactSVG src="./svg/close.svg" onClick={onClick} className={className} /> : <ReactSVG src="./svg/search.svg" onClick={onClick} className={css.icon} />}</>;
};
