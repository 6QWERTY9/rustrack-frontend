import css from './index.module.scss';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import { ReactSVG } from 'react-svg';
import { Input } from '../../../../../Input';
import { CatalogButton } from '../../CatalogButton';
import { Nav } from '../../Nav';
import { Link } from 'react-router-dom';

import useDeviceType from '../../../../../../hooks/useDeviceType';
import { Catalog } from '../../Catalog';

export const BottomContent = () => {
    const [mobSearchOpen, setMobSearchOpen] = useState(false);
    const deviceType = useDeviceType();
    const [isMobSearch, setIsmobSearch] = useState(deviceType === 'mobile');
    const [openCatalog, setOpenCatalog] = useState(false);

    const searchRef = useRef<HTMLDivElement>(null);

    const handleOpenCatalog = () => {
        setOpenCatalog((prev) => !prev);
    }

    const handleMobSearchOpen = () => {
        setMobSearchOpen((prev) => !prev);
        setIsmobSearch((prev) => !prev);
    };

    const handleMobSearchClose = () => {
        setMobSearchOpen(false);
        setIsmobSearch(true); // Возвращаемся к состоянию кнопки на мобильных
    };
    
    useEffect(() => {
        const handleClickOutside = (event: Event) => { // Измените тип на Event
            if (mobSearchOpen && searchRef.current && !searchRef.current.contains(event.target as Node)) {
                handleMobSearchClose();
            }
        };

        if (mobSearchOpen) {
            // Добавьте оба события
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [mobSearchOpen]);
    return (
        <div className={css.bottom_content_wrapper}>
            <div className={clsx(css.bottom_content, css[deviceType])}>
                <div className={clsx(css.catalog_btn_wrapper, { [css.disable]: mobSearchOpen })}>
                    <CatalogButton onClick={handleOpenCatalog} />
                </div>
                <div className={clsx(css.menu_nav_wrapper)}>
                    <Nav />
                </div>
                <div className={clsx(css.search_wrapper, css[deviceType], { [css.search_open]: mobSearchOpen })}>
                    {isMobSearch ? <ReactSVG src="./svg/search_button.svg" onClick={handleMobSearchOpen} /> : <Input type="search" radius={true} />}
                </div>
                <div className={clsx(css.user_items_wrapper, { [css.disable]: mobSearchOpen })}>
                    <UserItems to={'/wishlist'} src={'./svg/wishlist.svg'} />
                    <UserItems to={'/favorites'} src={'./svg/favorites.svg'} />
                </div>
                <Catalog isOpen={openCatalog}/>
            </div>
        </div>
    );
};

const UserItems = ({ to, src }: { to: string; src: string }) => {
    return (
        <Link to={to}>
            <ReactSVG src={src} />
        </Link>
    );
};
