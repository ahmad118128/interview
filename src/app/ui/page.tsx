'use client';

import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import DragAndDropUpload from '@/components/organisms/UploaderInput';
import { Box } from '@mui/material';
import { CustomButton } from '@/components/atoms/CustomButton';
import CustomModal from '@/components/organisms/Modal';
import { message } from '@/strings';
import { Button } from '@mui/material';
import { useState } from 'react';
import ReportPictureModal from '@/components/organisms/Modal/ReportPictureModal';

const mockData = {
  src: '/assets/images/dashboard/technology 1.svg',
  name: 'test1',
  sex: 'مرد با احتمال بالا',
  age: 24,
  date: '1373/09/04 09:19',
  arrow: 'ورودی - خروجی',
  birthCity: 'تهران',
  agreementPercent: '35 - 55',
};

export interface FormData {
  images: File[];
}

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
  const [openPicModal, setOpenPicModal] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleOpenPicModal = () => setOpenPicModal(true);

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
      <Button onClick={handleOpenPicModal}>Open picModal</Button>
      <ReportPictureModal
        open={openPicModal}
        setOpen={setOpenPicModal}
        name={mockData.name}
        age={mockData.age}
        agreementPercent={mockData.agreementPercent}
        sex={'مرد با احتمال بالا'}
        arrow={'ورودی - خروجی'}
        birthCity={mockData.birthCity}
        src={mockData.src}
        date={mockData.date}
      />
    </>
  );
}
