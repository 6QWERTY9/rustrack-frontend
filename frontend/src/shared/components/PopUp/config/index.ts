import * as Yup from 'yup';

export const ValidationSchema = Yup.object({
    name: Yup.string().required('Имя обязательно'),
    phone: Yup.string().matches(
      /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      'Номер телефона должен быть в формате +7 (XXX) XXX-XX-XX'
    )
    .required('Номер телефона обязателен'),
})
