import { ReactSVG } from 'react-svg';
import type { IContactsProps } from '../model';
import css from './index.module.scss';
export const Contacts: React.FC<IContactsProps> = ({ onCLick }) => {
    return (
        <div className={css.contacts_wrapper}>
            <div className={css.contact_text}>
                <span>Для регионов: 8 (800) 77-77-210</span>
                <span>Нижний Новгород: 8 (831) 225-00-55</span>
            </div>
            <button className={css.order_call_btn} onClick={onCLick}>
                <ReactSVG src={'./svg/phone.svg'} />
            </button>
        </div>
    );
};
