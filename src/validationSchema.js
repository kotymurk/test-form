import * as yup from 'yup';

const phoneRegExp = /^\+?[\d\s\-\(\)]{10,}$/;

export const schema = yup
  .object({
    name: yup.string().trim().required('Обязательное поле'),
    username: yup.string().trim().required('Обязательное поле'),
    email: yup
      .string()
      .trim()
      .email('Неверный формат email')
      .required('Обязательное поле'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'Неверный формат телефона')
      .min(10, 'Минимум 10 цифр')
      .required('Обязательное поле'),
    address: yup
      .object({
        street: yup.string().trim().required('Обязательное поле'),
        suite: yup.string().trim().required('Обязательное поле'),
        city: yup.string().trim().required('Обязательное поле'),
        zipcode: yup
          .string()
          .matches(/^[\d-]+$/, 'Только цифры и дефис')
          .required('Обязательное поле'),
      })
      .required(),
    website: yup
      .string()
      .trim()
      .nullable()
      .test('is-url-or-empty', 'Неверный URL', function (value) {
        if (!value || value.trim() === '') return true;
        try {
          new URL(value);
          return true;
        } catch {
          return false;
        }
      }),
    company: yup.object({
      name: yup
        .string()
        .nullable()
        .transform((value) => (value === null ? '' : value.trim()))
        .test('no-empty-string', 'Поле не может быть пустым', function (value) {
          return !value || value.length > 0;
        }),
      catchPhrase: yup
        .string()
        .nullable()
        .transform((value) => (value === null ? '' : value.trim()))
        .test('no-empty-string', 'Поле не может быть пустым', function (value) {
          return !value || value.length > 0;
        }),
      bs: yup
        .string()
        .nullable()
        .transform((value) => (value === null ? '' : value.trim()))
        .test('no-empty-string', 'Поле не может быть пустым', function (value) {
          return !value || value.length > 0;
        }),
    }),
  })
  .required();
