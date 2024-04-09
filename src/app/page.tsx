import { TextField } from '@/components/atoms/TextField';
import { useForm } from 'react-hook-form';

export default function Home() {
  const { control } = useForm();
  return (
    <>
      <p>main page</p>
      <TextField name="aaa" control={control} />
    </>
  );
}
