import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../validationSchema';
import { useState } from 'react';
import './CreateUserForm.css';

export default function CreateUserForm() {
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    setSubmitStatus(null);
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        },
      );

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Пользователь успешно создан ✅',
        });
      } else {
        throw new Error();
      }
    } catch {
      setSubmitStatus({ type: 'error', message: 'Ошибка при создании ❌' });
    }
  };

  return (
    <div className='form-wrapper'>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input
            placeholder='Name'
            {...register('name')}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && (
            <p className='error-message'>{errors.name.message}</p>
          )}
        </label>

        <label>
          Username:
          <input
            placeholder='Username'
            {...register('username')}
            className={errors.username ? 'error' : ''}
          />
          {errors.username && (
            <p className='error-message'>{errors.username.message}</p>
          )}
        </label>

        <label>
          Email:
          <input
            type='email'
            placeholder='Email'
            {...register('email')}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && (
            <p className='error-message'>{errors.email.message}</p>
          )}
        </label>

        <label>
          Phone:
          <input
            placeholder='Phone'
            {...register('phone')}
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && (
            <p className='error-message'>{errors.phone.message}</p>
          )}
        </label>

        <h3>Address</h3>
        <label>
          Street:
          <input
            placeholder='Street'
            {...register('address.street')}
            className={errors.address?.street ? 'error' : ''}
          />
          {errors.address?.street && (
            <p className='error-message'>{errors.address.street.message}</p>
          )}
        </label>

        <label>
          Suite/Apt:
          <input
            placeholder='Suite'
            {...register('address.suite')}
            className={errors.address?.suite ? 'error' : ''}
          />
          {errors.address?.suite && (
            <p className='error-message'>{errors.address.suite.message}</p>
          )}
        </label>

        <label>
          City:
          <input
            placeholder='City'
            {...register('address.city')}
            className={errors.address?.city ? 'error' : ''}
          />
          {errors.address?.city && (
            <p className='error-message'>{errors.address.city.message}</p>
          )}
        </label>

        <label>
          Zipcode:
          <input
            placeholder='Zipcode'
            {...register('address.zipcode')}
            className={errors.address?.zipcode ? 'error' : ''}
          />
          {errors.address?.zipcode && (
            <p className='error-message'>{errors.address.zipcode.message}</p>
          )}
        </label>

        <h3>Optional</h3>
        <label>
          Website:
          <input
            placeholder='https://example.com'
            {...register('website')}
            className={errors.website ? 'error' : ''}
          />
          {errors.website && (
            <p className='error-message'>{errors.website.message}</p>
          )}
        </label>

        <label>
          Company Name:
          <input
            placeholder='Company'
            {...register('company.name')}
            className={errors.company?.name ? 'error' : ''}
          />
          {errors.company?.name && (
            <p className='error-message'>{errors.company.name.message}</p>
          )}
        </label>

        <label>
          Catch Phrase:
          <input
            placeholder='Catch Phrase'
            {...register('company.catchPhrase')}
            className={errors.company?.catchPhrase ? 'error' : ''}
          />
          {errors.company?.catchPhrase && (
            <p className='error-message'>
              {errors.company.catchPhrase.message}
            </p>
          )}
        </label>

        <label>
          BS:
          <input
            placeholder='BS'
            {...register('company.bs')}
            className={errors.company?.bs ? 'error' : ''}
          />
          {errors.company?.bs && (
            <p className='error-message'>{errors.company.bs.message}</p>
          )}
        </label>

        <div className='form-actions'>
          <button type='submit' disabled={!isValid || isSubmitting}>
            {isSubmitting ? 'Creating...' : 'Sign Up'}
          </button>
        </div>

        {submitStatus && (
          <div className={`status-message ${submitStatus.type}`}>
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  );
}
