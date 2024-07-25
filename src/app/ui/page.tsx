'use client';

import { CustomRadioButton } from '@/components/atoms/CustomRadioButton';
import SlidePicture from '@/components/molecules/Slider';
import { FormProvider, useForm, FieldValues } from 'react-hook-form';
import DragAndDropUpload from '@/components/organisms/UploaderInput';
import { Box } from '@mui/material';
import { CustomButton } from '@/components/atoms/CustomButton';
import CustomModal from '@/components/organisms/Modal/CustomModal';
import { ReportModal } from '@/strings';
import { Button } from '@mui/material';
import { useState } from 'react';
import ReportPictureModal from '@/components/organisms/Modal/ReportPictureModal';
import EmptyState from '@/components/atoms/EmptyState';
import { group1 } from './constants';

const mockData = {
  src: '/assets/images/dashboard/avatar1.png',
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
  data: any;
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

  const { control, handleSubmit } = useForm<FieldValues>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
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
        <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
          <CustomRadioButton
            control={control}
            rules={{ required: true }}
            name={'data'}
            groupData={group1}
          />
          <input type="submit" />
        </form>
      </div>
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
        title={ReportModal.results}
        personInfo={mockData}
        open={openPicModal}
        setOpen={setOpenPicModal}
      />
      <SlidePicture />
      <EmptyState />
    </>
  );
}
