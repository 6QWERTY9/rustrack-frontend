import { ReactSVG } from 'react-svg';
import type { ChevronButtonProps } from '../model';
import css from './index.module.scss';
export const ChevronButton: React.FC<ChevronButtonProps> = ({ directionIcon, onClick }) => {
    const iconSrc = `./svg/icon_${directionIcon}_chevron.svg`;
    return (
        <button className={css.chevron_button} onClick={onClick}>
            <ReactSVG src={iconSrc} />
        </button>
    );
};
