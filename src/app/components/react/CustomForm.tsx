import { useForm, SubmitHandler } from 'react-hook-form';

interface IMyFormProp {
  name: string;
  lastName: string;
  password: number;
}

function BaseForm() {
  const { register, handleSubmit } = useForm<IMyFormProp>();

  const handelSubmitMyForm: SubmitHandler<IMyFormProp> = (value) => {
    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit(handelSubmitMyForm)}>
      <div>
        <label>Name : </label>
        <input type="text" {...register('name')} />
      </div>
      <div>
        <label>last Name : </label>
        <input type="text" {...register('lastName')} />
      </div>
      <div>
        <label>passWord : </label>
        <input type="password" {...register('password')} />
      </div>
    </form>
  );
}
