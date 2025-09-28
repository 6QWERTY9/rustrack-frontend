import clsx from "clsx";
import type { ICatalogItemProp } from "../model";
import css from './index.module.scss';
import { Link } from "react-router-dom";

export const CatalogItem: React.FC<ICatalogItemProp> = ({ id, isSelect, links, title }) => {
  return (
    <div className={css.catalog_item}>
      <ul className={css.catalog_item_wrapper} id={id}>
        <li className={clsx(css.catalog_item_title, { [css.select]: isSelect })}>{title}</li>
        <ul className={css.links_list}>
          {(links || []).map((link) => (  // Добавлена проверка: если links undefined, используем пустой массив
            <li key={link.to} className={css.link_wrapper}>
              <Link to={link.to} className={css.link}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};