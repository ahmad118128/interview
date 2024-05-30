'use client';

import { CustomRadioButton } from '@/components/atoms/CustomRadioButton';
import CustomModal from '@/components/organisms/Modal';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import ThumbnailPicModal from '@/components/organisms/Modal/ThumbnailPicModal';
import ReportPictureModal from '@/components/organisms/Modal/ReportPictureModal';

type FormInputs = {
  data: string;
};

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

export default function Home() {
  const [open, setOpen] = useState(false);
  const [openThumbnail, setOpenThumbnail] = useState(false);
  const [openReportPic, setOpenReportPic] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleOpenThumbnail = () => setOpenThumbnail(true);
  const handleOpenReportPic = () => setOpenReportPic(true);

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
      <Button onClick={handleOpenReportPic}>Open modal reportPicture</Button>
      <ReportPictureModal
        open={openReportPic}
        setOpen={setOpenReportPic}
        name={mockData.name}
        age={mockData.age}
        src={mockData.src}
        agreementPercent={mockData.agreementPercent}
        birthCity={mockData.birthCity}
        sex={'مرد با احتمال بالا'}
        arrow={'ورودی - خروجی'}
      />
    </>
  );
}
