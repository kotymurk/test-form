import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validationSchema';

export default function CreateUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        },
      );

      if (!response.ok) throw new Error();

      alert('Пользователь успешно создан ✅');
    } catch {
      alert('Ошибка при создании ❌');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        First Name:
        <input placeholder='First Name' {...register('firstName')} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </label>

      <label>
        Last Name:
        <input placeholder='Last Name' {...register('lastName')} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </label>

      <label>
        Username:
        <input placeholder='Username' {...register('username')} />
        {errors.username && <p>{errors.username.message}</p>}
      </label>

      <label>
        Email:
        <input placeholder='Email' {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </label>

      <label>
        Password:
        <input placeholder='Password' {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}
      </label>

      <label>
        Repeat Password:
        <input placeholder='Password' {...register('repeatPassword')} />
        {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}
      </label>

      <div>
        <button type='submit' disabled={!isValid}>
          Sign Up
        </button>
      </div>
    </form>
  );
}
