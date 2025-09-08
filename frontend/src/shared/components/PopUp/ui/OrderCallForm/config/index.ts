import * as Yup from 'yup';

export const ValidationSchema = Yup.object({
    name: Yup.string().required('Имя обязательно'),
    phone: Yup.string()
    .matches(
      /^(\+7|7|8)?[\s\-]?\(?(\d{3})\)?[\s\-]?(\d{3})[\s\-]?(\d{2})[\s\-]?(\d{2})$/,
      'Некорректный формат '
    )
    .required('Номер телефона обязателен')
    .test('phone-length', 'Номер должен содержать 11 цифр после префикса', (value) => {
      if (!value) return false;
      // Удаляем все нецифровые символы и проверяем длину
      const digits = value.replace(/\D/g, '');
      return digits.length === 11;
    }),
})
