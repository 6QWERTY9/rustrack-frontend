import { ReactSVG } from "react-svg"
import { DropDown } from "../../DropDown";
import css from './index.module.scss'
import { Contacts } from "../../Contact/ui/Contact";
import { PopUp } from "../../../../../PopUp";
import { useState } from "react";
import useDeviceType from "../../../../../../hooks/useDeviceType";
import clsx from "clsx";
import { Link } from "react-router-dom";

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
  const deviceType = useDeviceType();
  return (
  <div className={css.logo_wrapper}>
    <div className={clsx(css.logo)}>
      <Link to={'/'} className={clsx({[css.disable_line]: deviceType === 'tablet' || deviceType === 'mobile'})}>
        <ReactSVG src="./svg/Subtract.svg"/>
        <span>рустрак</span>
      </Link>
    </div>
    <div className={clsx(css.logo_text, {[css.disable]: deviceType === 'tablet' || deviceType === 'mobile'})}>
      <span>
        производство и продажа автоспецтехники
      </span>
    </div>
  </div>
  )
}
