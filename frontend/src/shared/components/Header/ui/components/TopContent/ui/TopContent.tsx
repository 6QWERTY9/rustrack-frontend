import { ReactSVG } from "react-svg"
import { DropDown } from "../../DropDown";
import css from './index.module.scss'
import { Contacts } from "../../Contact/ui/Contact";
import { PopUp } from "../../../../../PopUp";
import { useState } from "react";

export const TopContent = () => {
  const [popUpOpen, setPopUpOpen] = useState(false);

  const handleOpenPopUp = ()  => {
    setPopUpOpen(true);
  }
  const handleClosePopUp = () => {
    setPopUpOpen(false)
  }
  
  return (
    <div className={css.top_content_wrapper}>
      <div className={css.top_content}>
        <Logo/>

        <div className={css.dropDown_top_content_wrapper}>
          <DropDown/>
        </div>

        <div className={css.contact_top_content_wrapper}>
          <Contacts onCLick={handleOpenPopUp}/>
          
        </div>
        <PopUp open={popUpOpen} onClose={handleClosePopUp}/>
      </div>
    </div>
  )
}

const Logo = () => {
  return (
  <div className={css.logo_wrapper}>
    <div className={css.logo}>
      <ReactSVG src="./svg/Subtract.svg"/>
      <span>рустрак</span>
    </div>
    <div className={css.logo_text}>
      <span>
        производство и продажа автоспецтехники
      </span>
    </div>
  </div>
  )
}
