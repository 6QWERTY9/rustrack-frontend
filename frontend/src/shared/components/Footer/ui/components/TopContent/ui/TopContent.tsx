import { FooterContacts } from '../../FooterContacts';
import { FooterNav } from '../../FooterNav';
import css from './index.module.scss';

export const TopContent = () => {
  return (
    <div className={css.footer_top_content}>
      <FooterContacts/>
      <FooterNav/>
    </div>
  )
}
