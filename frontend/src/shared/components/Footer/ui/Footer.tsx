import clsx from 'clsx';
import css from './index.module.scss';
import { TopContent } from './components/TopContent';
import { BottomContent } from './components/BottomContent';
export const Footer = () => {
  return (
    <footer className={clsx(css.footer)}>
      <div className={css.footer_content}>
        <TopContent/>
        <BottomContent/>
      </div>
    </footer>
  )
}
