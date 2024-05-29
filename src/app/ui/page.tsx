'use client';

import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import DragAndDropUpload from '@/components/organisms/UploaderInput';
import { Box } from '@mui/material';
import { CustomButton } from '@/components/atoms/CustomButton';

export interface FormData {
  images: File[];
}

export default function Home() {
  const methods = useForm<FormData>({
    defaultValues: {
      images: [],
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <Box sx={{ padding: '1rem' }}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <DragAndDropUpload name="images" control={methods.control} />
          <CustomButton sx={{ marginTop: '1rem' }} type="submit">
            Submit
          </CustomButton>
        </form>
      </FormProvider>
    </Box>
  );
}
