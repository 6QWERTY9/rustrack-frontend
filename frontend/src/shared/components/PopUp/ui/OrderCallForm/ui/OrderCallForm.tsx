import { Form, Formik } from 'formik';

import { Input } from '../../../../Input';
import css from './index.module.scss';
import { ValidationSchema } from '../config';
import type { IOrderCallFormProps } from '../model';

export const OrderCallForm: React.FC<IOrderCallFormProps> = ({onSubmitSuccess}) => {
    return (
        <Formik
            initialValues={{ name: '', phone: '' }}
            validationSchema={ValidationSchema}
            onSubmit={(values, { setSubmitting, setErrors }) => {
                console.log('Submitting', values);
                setSubmitting(false);
                onSubmitSuccess()
            }}
            validateOnChange={false}
        >
            {({ isSubmitting, errors, values, handleChange, handleBlur, touched }) => (
                <Form className={css.order_call}>
                    <Input
                        label="Имя"
                        type="text"
                        name="name" // Добавлено: имя поля для Formik
                        value={values.name}
                        onChange={handleChange} // Добавлено: обработчик изменений
                        onBlur={handleBlur} // Добавлено: обработчик потери фокуса
                        error={touched.name ? errors.name : ''}
                        placeholder="Иван Иванов"
                    />
                    <Input
                        label="Телефон"
                        type="tel"
                        name="phone" // Добавлено: имя поля для Formik
                        value={values.phone}
                        onChange={handleChange} // Добавлено: обработчик изменений
                        onBlur={handleBlur} // Добавлено: обработчик потери фокуса
                        error={touched.phone ? errors.phone : ''}
                        placeholder="+7 (XXX)-XXX-XX-XX"
                    />

                    <button type="submit" className={css.submit_btn} disabled={isSubmitting}>
                        Отправить
                    </button>
                </Form>
            )}
        </Formik>
    );
};
