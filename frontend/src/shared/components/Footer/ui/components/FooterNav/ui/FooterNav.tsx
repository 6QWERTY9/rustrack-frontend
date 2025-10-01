import { useState } from 'react';
import { CatalogItem, type ICatalogItemProp } from '../../../../../Header/ui/components/Catalog/ui/components/CatalogItem';
import css from './index.module.scss';
import useDeviceType from '../../../../../../hooks/useDeviceType';

const footerNavItem = [
  {
    id: 'footer_link_1',
    links: [{to: '', text: 'Категории'}, {to: '', text: 'Каталог'},{to: '', text: 'Избранное'},{to: '', text: 'О компании'},{to: '', text: 'Вакансии'}],
    title: 'Название блока'
  },
  {
    id: 'footer_link_2',
    links: [{to: '', text: 'Категории'}, {to: '', text: 'Каталог'},{to: '', text: 'Избранное'},{to: '', text: 'О компании'},{to: '', text: 'Вакансии'}],
    title: 'Название блока'
  },
  {
    id: 'footer_link_3',
    links: [{to: '', text: 'Категории'}, {to: '', text: 'Каталог'},{to: '', text: 'Избранное'},{to: '', text: 'О компании'},{to: '', text: 'Вакансии'}],
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
                  
                ))}
            </div>
        </nav>
    );
};
