import { Link } from 'react-router-dom';
import css from './index.module.scss';
import { routesPath } from '../../../../app/router/routesPath';
import type { INewsCardProps } from '../model';

export const NewsCard: React.FC<INewsCardProps> = ({id, title='заголовок', ...props}) => {
  const url = routesPath.NEWSID(id);

  return (
    <Link to={url} className={css.news_card_wrapper} aria-label={`Читать новость: ${title}`}>
      <div className={css.news_card}>
          {props.img && (
            <div className={css.news_card_img}>
              <img 
                src={props.img.src}
                srcSet={
                  `
                  ${props.img.imgSmall} 136w,
                  ${props.img.imgMedium} 228w,
                  ${props.img.src} 312w
                  `
                }
                sizes={
                  `
                  (max-width: 600px) 136px,
                  (max-width: 768px) 228px,
                  312px
                  `
                }

                alt={title.length > 50 ? `${title.slice(0, 50)}...` : title}
              />
            </div>
          )}
          <div className={css.news_card_text}>
            <span className={css.news_card_text_date}>{props.date}</span>
            <h3 className={css.news_card_text_title}>{title}</h3>
          </div>
          <span className={css.news_card_more}>Подробнее</span>
      </div>
    </Link>
  )
}
