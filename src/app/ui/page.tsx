'use client';

import { CustomRadioButton } from '@/components/atoms/CustomRadioButton';
import CustomModal from '@/components/organisms/Modal';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import ThumbnailPicModal from '@/components/organisms/Modal/thumbnailPicModal';

type FormInputs = {
  data: string;
};

export default function Home() {
  const [open, setOpen] = useState(false);
  const [openThumbnail, setOpenThumbnail] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleOpenThumbnail = () => setOpenThumbnail(true);

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
          />
          <input type="submit" />
        </form>
      </div>
      <Button onClick={handleOpen}>Open modal</Button>
      <CustomModal
        open={open}
        setOpen={setOpen}
        title="لطفا وارد شوید"
        buttons={true}
      />
      <Button onClick={handleOpenThumbnail}>Open modal Thumbnail</Button>
      <ThumbnailPicModal
        src="/assets/images/dashboard/technology 1.svg"
        open={openThumbnail}
        setOpen={setOpenThumbnail}
        title="تصویر آپلود شده"
      />
    </>
  );
}
