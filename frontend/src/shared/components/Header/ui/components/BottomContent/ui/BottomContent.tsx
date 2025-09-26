import { ReactSVG } from 'react-svg';
import { Input } from '../../../../../Input';
import { CatalogButton } from '../../CatalogButton';
import { Nav } from '../../Nav';
import css from './index.module.scss';
import { Link } from 'react-router-dom';
import useDeviceType from '../../../../../../hooks/useDeviceType';
import clsx from 'clsx';
import { useState } from 'react';

export const BottomContent = () => {
    const [mobSearchOpen, setMobSearchOpen] = useState(false);
    const deviceType = useDeviceType();
    const [isMobSearch, setIsmobSearch] = useState(deviceType === 'mobile');

    const handleMobSearchOpen = () => {
      setMobSearchOpen((prev) => !prev);
      setIsmobSearch((prev)=>!prev);
    }
    const handleMobSearchClose = () => {

    }
    return (
        <div className={css.bottom_content_wrapper}>
            <div className={clsx(css.bottom_content, css[deviceType])}>
                <div className={clsx(css.catalog_btn_wrapper, {[css.disable]: mobSearchOpen})}>
                    <CatalogButton />
                </div>
                <div className={clsx(css.menu_nav_wrapper, {[css.disable]: deviceType != 'desctop'})}>
                    <Nav />
                </div>
                <div className={clsx(css.search_wrapper, css[deviceType], {[css.search_open]: mobSearchOpen})}>
                    {isMobSearch ? (
                      <ReactSVG src='./svg/search_button.svg' onClick={handleMobSearchOpen}/>
                    ) : (

                      <Input type="search" radius={true} />
                    )}
                </div>
                <div className={clsx(css.user_items_wrapper, {[css.disable]: mobSearchOpen})}>
                    <UserItems to={'/wishlist'} src={'./svg/wishlist.svg'} />
                    <UserItems to={'/favorites'} src={'./svg/favorites.svg'} />
                </div>
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
