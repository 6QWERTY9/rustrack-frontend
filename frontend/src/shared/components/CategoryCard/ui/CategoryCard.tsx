import { Link } from 'react-router-dom';
import type { ICategoryCardProps } from '../model';
import css from './index.module.scss';
import { ROUTE_PATHS } from '../../../../app/router/routesPath';

export const CategoryCard: React.FC<ICategoryCardProps> = ({catgoryID='caravans', title='Автофургоны', preTitle='27 моделей', img}) => {
  return (
    <Link to={ROUTE_PATHS.CATEGORY(catgoryID)} style={{display: 'block', width: 'min-content'}}>
      <div className={css.category_card}>
        <div className={css.category_card_text}>
          <h3 className={css.category_card_text_title}>{title}</h3>
          <span className={css.category_card_text_pretitle}>{preTitle}</span>
        </div>
        <div className={css.category_card_img_wrapper}>
          <img
            src={img.src} // базовое изображение (обычно крупное)
            srcSet={`
              
              ${img.imgMedium} 768w,
              ${img.src} 1024w
            `}
            sizes="(max-width: 450px) 200vw,(max-width: 768px) 100vw, 52vw"
            alt={title ?? 'category image'}
            
            className={css.category_card_img}
          />
        </div>
      </div>
    </Link>
  )
}
