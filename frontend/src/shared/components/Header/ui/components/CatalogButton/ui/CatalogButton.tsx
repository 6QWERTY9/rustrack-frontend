import { useState } from "react";
import type { ICatalogButtonProps } from "../model"
import css from './index.module.scss'
import clsx from "clsx";

export const CatalogButton: React.FC<ICatalogButtonProps> = ({onClick}) => {
  const [crossAnimetated, setCrossAnimated] = useState(false);
  const handleAnimatedIcon = () => {
    setCrossAnimated(e => !e);
  }

  return (
      <button onClick={onClick} className={clsx(css.catalog_btn, css.focus)}>
        <div  className={clsx(css.wrapper_content)} onClick={handleAnimatedIcon}   >
            <div className={clsx(css.catalog_btn_icon)} >
              <div className={clsx(css.catalog_btn_icon_content, {[css.open]: crossAnimetated} )}>
                <div className={css.catalog_btn_icon_content_line}></div>
              </div>
            </div>
            <span>
                Каталог
            </span>
        </div>
      </button>
  )
}

