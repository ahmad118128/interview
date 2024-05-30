'use client';

import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import DragAndDropUpload from '@/components/organisms/UploaderInput';
import { Box } from '@mui/material';
import { CustomButton } from '@/components/atoms/CustomButton';

export interface FormData {
  images: File[];
}
import { CustomRadioButton } from '@/components/atoms/CustomRadioButton';
import CustomModal from '@/components/organisms/Modal';
import { message } from '@/strings';
import { Button } from '@mui/material';
import { SetStateAction, useState } from 'react';

type FormInputs = {
  data: string;
};

export default function Home() {
  const methods = useForm<FormData>({
    defaultValues: {
      images: [],
    },
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const { control, register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <>
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
      <Button onClick={handleOpen}>Open modal</Button>
      <CustomModal
        open={open}
        setOpen={setOpen}
        title="لطفا وارد شوید"
        buttons={true}
      />
    </>
  );
}
