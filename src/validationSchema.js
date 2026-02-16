import * as yup from 'yup';

export const schema = yup
  .object({
    name: yup.string().required('Обязательное поле'),
    username: yup.string().required('Обязательное поле'),
    email: yup
      .string()
      .email('Неверный формат email')
      .required('Обязательное поле'),
    phone: yup
      .string()
      .matches(/^[\d\s\-\+\(\)]+$/, 'Неверный формат')
      .min(10, 'Минимум 10 цифр')
      .required('Обязательное поле'),
    address: yup
      .object({
        street: yup.string().required('Обязательное поле'),
        suite: yup.string().required('Обязательное поле'),
        city: yup.string().required('Обязательное поле'),
        zipcode: yup
          .string()
          .matches(/^[\d-]+$/, 'Только цифры и дефис')
          .required('Обязательное поле'),
      })
      .required(),
    website: yup.string().url('Неверный URL').nullable(),
    company: yup.object({
      name: yup.string().nullable(),
      catchPhrase: yup.string().nullable(),
      bs: yup.string().nullable(),
    }),
  })
  .required();
