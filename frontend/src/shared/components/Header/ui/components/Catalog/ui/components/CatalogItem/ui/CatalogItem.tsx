import clsx from "clsx";
import type { ICatalogItemProp } from "../model";
import css from './index.module.scss';
import { Link } from "react-router-dom";
import useDeviceType from "../../../../../../../../../hooks/useDeviceType";


// Расширьте интерфейс, добавив isExpanded и onSelect


export const CatalogItem: React.FC<ICatalogItemProp> = ({ 
  id, 
  isSelect, 
  isExpanded, // Теперь из props
  links, 
  title, 
  onSelect,
  isFooter
}) => {
  const deviceType = useDeviceType();

  const handleTitleClick = () => {
    onSelect?.(id); // Вызываем обработчик из родителя

  };

 

  return (
    <div className={clsx(css.catalog_item, {[css.open]: isExpanded})}>
      <ul className={clsx(css.catalog_item_wrapper, css[deviceType])} id={id}>
        <li 
          className={clsx(css.catalog_item_title, css[deviceType], { [css.select]: isSelect }, {[css.footer_title]: isFooter})} 
          onClick={handleTitleClick} // Клик на заголовок
        >
          {title}
        </li>
        <ul className={clsx(css.links_list, { [css.hidden]: !isExpanded }, {[css.footer_link_list]: isFooter})}> {/* Скрываем на основе props */}
          {(links || []).map((link) => (  
            <li key={link.to} className={css.link_wrapper}>
              <Link to={link.to} className={clsx(css.link, {[css.footer_link]: isFooter})}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};