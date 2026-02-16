import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('Обязательное поле'),
  username: yup.string().required('Обязательное поле'),

  email: yup.string().email('Некорректный email').required('Обязательное поле'),
});
