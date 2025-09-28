import  type { ICatalogProps} from "../model";
import { CatalogItem, type ICatalogItemProp } from "./components/CatalogItem";
import css from './index.module.scss';

export const Catalog: React.FC<ICatalogProps> = ({isOpen}) => {
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
    }
  ]
  return (
    <dialog open={isOpen} className={css.catalog_wrapper}>
      <div className={css.catalog_content_wrapper}>
        <CatalogItem {...items[0]}/>
      </div>
    </dialog>
  );
}



