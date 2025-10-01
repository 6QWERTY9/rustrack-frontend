import css from './index.module.scss';

export const Disclaimer = () => {
  return (
    <div className={css.disclaimer_wrapper}>
        <span>2009 - 2021 © Rus - Trucks</span>
        <span>
          Информация на сайте не является публичной 
        </span>
        <span>офертой и носит исключительно информационный характер</span>
        <span>Разработка R-top</span>
    </div>
  )
}
