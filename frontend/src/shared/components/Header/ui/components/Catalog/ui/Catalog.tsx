import { useState } from 'react';
import type { ICatalogProps } from '../model';
import { CatalogItem } from './components/CatalogItem';
import css from './index.module.scss';
import useDeviceType from '../../../../../../hooks/useDeviceType';

const items = [
    {
        id: 'category',
        title: 'Категории',
        links: [
            { to: '/cranes-manipulators', text: 'Краны-манипуляторы' },
            { to: '/van-bodies', text: 'Автофургоны' },
            { to: '/tow-trucks', text: 'Автоэвакуаторы' },
            { to: '/aerial-lifts', text: 'Автогидроподъёмники' },
            { to: '/flatbed-trucks', text: 'Бортовые Автомобили' },
            { to: '/dump-trucks', text: 'Самосвалы' },
            { to: '/tank-trucks', text: 'Автоцистерны' },
            { to: '/fuel-trucks', text: 'Автотопливозаправщики' },
            { to: '/hook-loaders', text: 'Крюковые погрузчики' },
            { to: '/available-products', text: 'Продукция в наличии' },
            { to: '/chassis', text: 'Шасси' },
            { to: '/all-categories', text: 'Смотреть все категории' },
        ],
        isSelect: true,
    },
    {
        id: 'about',
        title: 'О нас',
        links: [
            { to: '/cranes-manipulators', text: 'О компании ООО «Рустрак»' },
            { to: '/van-bodies', text: 'Новости' },
            { to: '/tow-trucks', text: 'Наши партнёры' },
            { to: '/aerial-lifts', text: 'Производство' },
            { to: '/flatbed-trucks', text: 'Поставщикам и партнёрам' },
            { to: '/dump-trucks', text: 'Отзывы' },
            { to: '/tank-trucks', text: 'Сертификаты' },
            { to: '/fuel-trucks', text: 'Вакансии' },
            { to: '/hook-loaders', text: 'Кредит и лизинг' },
        ],
        isSelect: true,
    },
    {
        id: 'media',
        title: 'Медиа',
        links: [
            { to: '/cranes-manipulators', text: 'Фотогалерея' },
            { to: '/van-bodies', text: 'Видео' },
            { to: '/tow-trucks', text: 'Материалы для скачиванияы' },
            { to: '/aerial-lifts', text: 'Рекламные материалы' },
        ],
        isSelect: true,
    },
];
export const Catalog: React.FC<ICatalogProps> = ({ isOpen }) => {
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
        <dialog open={isOpen} className={css.catalog_wrapper}>
            <div className={css.catalog_content_wrapper}>
                {items.map((item) => (
                    <CatalogItem
                        id={item.id}
                        isExpanded={deviceType == 'desctop' ? true: expandedId === item.id}
                        isSelect={selectedId === item.id}   
                        key={item.id}
                        title={item.title}
                        links={item.links}
                        onSelect={handleSelect} // Обработчик клика
                    />
                ))}
            </div>
        </dialog>
    );
};
