'use client';

import { CustomRadioButton } from '@/components/atoms/CustomRadioButton';
import { message } from '@/strings';
import { Form, useForm } from 'react-hook-form';

type FormInputs = {
  data: string;
};

export default function Home() {
  const { control, register, handleSubmit } = useForm();

  function submitHandler({ data }: any) {
    console.log(data);
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <form onSubmit={handleSubmit(submitHandler)}>
          <CustomRadioButton
            control={control}
            rules={{ required: true }}
            name={'data'}
            changeHandler={() => console.log('123')}
          />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}
