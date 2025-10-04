import { useState } from 'react';
import {type ICatalogItemProp } from '../../../../../Header/ui/components/Catalog/ui/components/CatalogItem';
import css from './index.module.scss';
import useDeviceType from '../../../../../../hooks/useDeviceType';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const footerNavItem = [
  {
    id: 'footer_link_1',
    links: [{to: '#', text: 'Категории'}, {to: '#', text: 'Каталог'},{to: '#', text: 'Избранное'},{to: '#', text: 'О компании'},{to: '#', text: 'Вакансии'}],
    title: 'Название блока'
  },
  {
    id: 'footer_link_2',
    links: [{to: '#', text: 'Категории'}, {to: '#', text: 'Каталог'},{to: '#', text: 'Избранное'},{to: '#', text: 'О компании'},{to: '#', text: 'Вакансии'}],
    title: 'Название блока'
  },
  {
    id: 'footer_link_3',
    links: [{to: '#', text: 'Категории'}, {to: '#', text: 'Каталог'},{to: '#', text: 'Избранное'},{to: '#', text: 'О компании'},{to: '#', text: 'Вакансии'}],
    title: 'Название блока'
  },
];
export const FooterNav = () => {
    const [selectedId, setSelectedId] = useState<string | null>('category'); // Выбранный элемент
    const [expandedId, setExpandedId] = useState<string | null>('category'); // Открытый dropdown
    const deviceType = useDeviceType();

    const handleSelect = (id: string) => {
        if (deviceType != 'desctop') {
            setSelectedId(id); // Всегда обновляем выбранный (можно выделять независимо)
            setExpandedId((prev) => (prev === id ? null : id)); // Toggle: если тот же — закрываем, иначе открываем новый
        }
    };
    return (
        <nav className={css.footer_nav_wrapper}>
            <div className={css.footer_nav_content}>
                {footerNavItem.map((item) => (
                  <FooterNavItem
                    id={item.id}
                    isExpanded={deviceType == 'desctop' || deviceType == 'tablet' ? true: expandedId === item.id}
                    isSelect={selectedId === item.id}   
                    key={item.id}
                    title={item.title}
                    links={item.links}
                    onSelect={handleSelect}
                  />
                ))}
            </div>
        </nav>
    );
};


export const FooterNavItem: React.FC<ICatalogItemProp> = ({ 
  id, 
  isSelect, 
  isExpanded, // Теперь из props
  links, 
  title, 
  onSelect,
}) => {
  const deviceType = useDeviceType();

  const handleTitleClick = () => {
    onSelect?.(id); // Вызываем обработчик из родителя

  };

 

  return (
    <div className={clsx(css.footer_item, {[css.open]: isExpanded})}>
      <ul className={clsx(css.footer_item_wrapper, css[deviceType])} id={id}>
        <li 
          className={clsx(css.footer_title, css[deviceType], { [css.select]: isSelect }, {[css.mobile_title_arrow]: isExpanded})} 
          onClick={handleTitleClick} // Клик на заголовок
        >
          {title}
        </li>
        <ul className={clsx(css.footer_links_list, { [css.hidden]: !isExpanded }

        )}> {/* Скрываем на основе props */}
          {(links || []).map((link) => (  
            <li key={link.to} className={css.footer_link_wrapper}>
              <Link to={link.to} className={clsx(css.footer_link)}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};
