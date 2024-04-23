'use client';
import { FieldValues, useForm } from 'react-hook-form';
import { CustomInput } from '@/components/atoms/customInput';
import { Button } from '@/components/atoms/customButton';

export default function Dashboard() {
  const { control, setError, handleSubmit } = useForm<FieldValues>({
    mode: 'onChange',
  });
  const submitHandler = (formData: FieldValues) => console.log(formData);
  return (
    <>
      <p>test components page</p>
      <form
        onSubmit={handleSubmit(submitHandler)}
        style={{
          padding: '10px 5px',
          display: 'flex',
          justifyContent: 'space-between',
          width: 'auto',
        }}
      >
        <CustomInput
          name="custom1"
          control={control}
          label="لیبل"
          type="text"
        />
        <CustomInput
          name="custom2"
          control={control}
          label="لیبل"
          type="text"
        />
        <CustomInput
          name="custom"
          control={control}
          label="لیبل"
          type="text"
          disabled
        />
        <CustomInput
          name="custom3"
          control={control}
          label="لیبل"
          type="text"
          setError={setError}
          validateType="num"
          inputBaseProps={{
            maxLength: 10,
          }}
        />
      </form>
      <Button size="large" title="test" variant="outlined">
        test
      </Button>
    </>
  );
}
