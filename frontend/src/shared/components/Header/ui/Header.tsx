import { BrowserRouter } from 'react-router-dom';
import { BottomContent } from './components/BottomContent';
import { TopContent } from './components/TopContent';
import css from './index.module.scss';
import { Catalog } from './components/Catalog';



export const Header = () => {

  return (
    <header className={css.header}>
      <div className={css.header_content}>
        <TopContent/>
        <div className={css.header_line}></div>
        <BrowserRouter>
          <BottomContent/>
          
        </BrowserRouter>
      </div>
    </header>
  )
}


