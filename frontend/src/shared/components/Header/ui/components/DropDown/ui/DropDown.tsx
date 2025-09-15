import { useState } from 'react';
import css from './index.module.scss';
import clsx from 'clsx';


export const DropDown= () => {
  const [isFocused, setIsFocused] = useState(false);


  return (
    <div className={css.dropDown_wrapper}>
        <div 
          className={css.dropDown_content}
          onMouseEnter={() => setIsFocused(true)}
          onMouseLeave={() => setIsFocused(false)}
        >
            <span 
              className={css.dropDown_content_title}
              aria-haspopup="true"
              
            >
              Время работы
            </span>
            <div className={clsx(css.dropDown_menu, {[css.focused]: isFocused})}>
              <span>Пн-пт: с 8:00 до 18:00</span>
              <span>Сб-вс: с 10:00 до 16:00</span>
            </div>
        </div>
        <p className={css.address_company}>
          г. Нижний Новгород ул. Торфяная, 35
        </p>
    </div>
  )
}
