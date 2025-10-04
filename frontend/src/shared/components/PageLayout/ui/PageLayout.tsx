import { Header} from "../../Header";
import { Footer } from "../../Footer";
import css from './index.module.scss';


interface IPageLayoutProps {
  children: React.ReactNode
}
export const PageLayout: React.FC<IPageLayoutProps> = ({children}) => {
  return (
    <div className={css.layout}>
      <Header/>
      <main className={css.main}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}