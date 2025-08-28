import clsx from 'clsx';
import type { ButtonProps } from '../model';
import css from './index.module.scss';

export const Button: React.FC<ButtonProps> = ({ children, theme, onClick }) => {
    const buttonClass = clsx(css.button, theme !== 'normal' && css[theme]);
    return (
        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
};
