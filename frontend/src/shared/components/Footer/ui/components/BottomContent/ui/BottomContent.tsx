import { Disclaimer } from '../../Disclaimer';
import { OurSocialMedia } from '../../OurSocialMedia';
import css from './index.module.scss';

export const BottomContent = () => {
  return (
    <div className={css.footer_bottom_content}>
      <Disclaimer/>
      <OurSocialMedia/>
    </div>
  )
}
