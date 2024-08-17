import { useForm } from 'react-hook-form';

export function Form() {
  const { register, handleSubmit, reset } = useForm({});
  const handleSubmitForm = ({ data }: any) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <input
        type="text"
        placeholder="Name"
        {...register('Name', { required: true })}
      />

      <input
        type="email"
        placeholder="Email"
        {...register('email', {
          required: 'Please Enter Your Email!',
        })}
      />

      <input type="password" placeholder="Password" {...register('password')} />

      <input
        type="password"
        placeholder="Confirm Password"
        {...register('confirmPassword')}
      />
      <button type="submit" />
    </form>
  );
}
