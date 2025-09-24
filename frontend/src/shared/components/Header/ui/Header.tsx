import { TopContent } from './components/TopContent';
import css from './index.module.scss';


export const Header = () => {
  return (
    <header className={css.header}>
      <TopContent/>
    </header>
  )
}


