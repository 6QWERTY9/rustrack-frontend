import { ReactSVG } from 'react-svg';
import { Input } from '../../../../../Input';
import { CatalogButton } from '../../CatalogButton';
import { Nav } from '../../Nav';
import css from './index.module.scss';
import { Link } from 'react-router-dom';

export const BottomContent = () => {
    return (
        <div className={css.bottom_content_wrapper}>
          <div className={css.bottom_content}>
            <div className={css.catalog_btn_wrapper}>
                <CatalogButton/>
            </div>
            <div className={css.menu_nav_wrapper}>
              <Nav/>
            </div>
            <div className={css.search_wrapper}>
              <Input type='search' radius={true}/>
            </div>
            <div className={css.user_items_wrapper}>
              <UserItems to={'/wishlist'} src={'./svg/wishlist.svg'}/>
              <UserItems to={'/favorites'} src={'./svg/favorites.svg'}/>
            </div>
          </div>
        </div>
    );
};


const UserItems = ({ to, src }: { to: string; src: string }) => {
  return (
    <Link to={to}>
      <ReactSVG src={src}/>
    </Link>
  )
}
