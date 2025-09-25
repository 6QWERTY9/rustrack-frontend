import { useState } from 'react';
import css from './index.module.scss';
import clsx from 'clsx';
import useDeviceType from '../../../../../../hooks/useDeviceType';


export const DropDown= () => {
  const [isFocused, setIsFocused] = useState(false);
  const deviceType = useDeviceType();


  return (
    <div className={clsx(css.dropDown_wrapper, {[css.disable]: deviceType === 'mobile'})}>
        <div 
          className={clsx(css.dropDown_content, {[css.disable]: deviceType === 'tablet'})}
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
        <p className={clsx(css.address_company, {[css.tablet_view]: deviceType === 'tablet'})}>
          г. Нижний Новгород ул. Торфяная, 35
        </p>
    </div>
  )
}
