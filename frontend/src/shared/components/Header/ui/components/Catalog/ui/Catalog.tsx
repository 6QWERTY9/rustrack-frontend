import  type { ICatalogProps, IItemsProps } from "../model";
import css from './index.module.scss';

export const Catalog: React.FC<ICatalogProps> = ({isOpen, items}) => {
  return (
    <dialog open={isOpen}>
      <div className={css.catalog_content_wrapper}>

      </div>
    </dialog>
  );
}



