import css from './index.module.scss';
import type { ICloseButtonProps } from '../model';

export const CloseButton: React.FC<ICloseButtonProps> = ({onClick}) => {
    return (
        <button className={css.close_button} onClick={onClick}>
            <div className={css.icon_wrapper}>
                <div className={css.icon_line}></div>
            </div>
        </button>
    );
};
