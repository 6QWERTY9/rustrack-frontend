import type { INavProps } from "../model";
import { navConfig } from "../config";
import { Link } from "react-router-dom";
import css from './index.module.scss';
import clsx from "clsx";
import { useEffect, useState } from "react";

export const Nav: React.FC<INavProps> = ({cbOnClick, isActived,}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
        const handleSrolle = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleSrolle);

        return () => {
          window.removeEventListener('scroll', handleSrolle);
        }
    }, []);
    
  return (
    <nav className={clsx(css.link_wrapper, {[css.hide]: scrolled})}>
      {navConfig.map(({id, title, path, selectID}) => (
        <Link 
          key={id} 
          to={path} 
          onClick={() => cbOnClick ? cbOnClick(selectID) : () => {}}
          className={clsx(css.link, {[css.sctived]: isActived})}
          >
            {title}
          </Link>
      ))}
    </nav>
  )
}