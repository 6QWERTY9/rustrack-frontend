import { Link } from 'react-router-dom';
import type { LinkLayoutProps } from '../model';
import css from './index.module.scss';

export const LinkLayout: React.FC<LinkLayoutProps> = ({ children, typeLink, route }) => {
    const fontSize = typeLink === 'download' ? '16px' : '18px';
    return (
        <Link to={route ? route : ''} download={typeLink === 'download'} className={css.link} style={{ fontSize: fontSize }}>
            <>{children}</>
        </Link>
    );
};
