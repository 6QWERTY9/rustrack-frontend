import { useState } from 'react';
import type { IPopUpProps } from '../model';
import css from './index.module.scss';
import { CloseButton } from './CloseButton';
import { OrderCallForm } from './OrderCallForm';
import clsx from 'clsx';

export const PopUp: React.FC<IPopUpProps> = ({ open }) => {
    const [isOpen, setIsOpen] = useState(open);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleCloseBtn = () => {
        setIsOpen(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
        if (e.key === 'Escape') {
            setIsOpen(false);
        }
    };

    const onFormSuccess = () => {
        setIsSubmitted(true);
    };

    return (
        <dialog open={isOpen} id="popUp" onKeyDown={handleKeyDown} className={clsx(css.popUp, { [css.successfully]: isSubmitted })}>
            <div className={clsx(css.popUp_content, { [css.successfully]: isSubmitted })}>
                <CloseButton onClick={handleCloseBtn} />
                <div className={clsx(css.text_content, { [css.successfully]: isSubmitted })}>
                    {isSubmitted ? (
                        <>
                            <h3 className={css.popUp_title}>Успешно!</h3>
                            <p className={css.popUp_paragraph}>Ваши данные направлены нашему менеджеру. Мы свяжемся с вами в ближайшее время!</p>
                        </>
                    ) : (
                        <>
                            <h3 className={css.popUp_title}>Заказать звонок</h3>
                            <p className={css.popUp_paragraph}>Наш менеджер свяжется с вами в ближайшее время</p>
                        </>
                    )}
                </div>
                {isSubmitted ? (
                    // После отправки — показать только кнопку закрытия (дополнительно к CloseButton, если нужно)
                    <button onClick={handleCloseBtn} className={css.successfully_button}>Закрыть</button>
                ) : (
                    <OrderCallForm onSubmitSuccess={onFormSuccess} />
                )}
            </div>
        </dialog>
    );
};
