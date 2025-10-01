import { useState } from 'react'
import { Button } from '../../../../../Button'
import { PopUp } from '../../../../../PopUp'
import css from './index.module.scss'
export const FooterContacts = () => {
  const [popUpOpen, setPopUPOpen] = useState(false);
  const handlePopUp = () => {
    setPopUPOpen(true)
  }
  const handlePopUpClose = () => {
    setPopUPOpen(false)
  }
  return (
    <div className={css.footer_contacts_wrapper}>
          <div className={css.footer_contacts_text}>
            <span>Тел/факс: 8(831) 225-00-55</span>
            <span>Email: info@rtrf.ru</span>
            <span>Нижний Новгород, ул. Торфяная, 35</span>
          </div>
          <Button onClick={handlePopUp} theme='normal'>
            <span>Заказать звонок</span>
          </Button>

          <PopUp open={popUpOpen} onClose={handlePopUpClose}/>
    </div>
  )
}