import Image from 'next/image';
import { ReportPictureModalProps } from './type';
import ReportPictureBox from './ReportPicBox';
import CustomModal from '../CustomModal';

export default function ReportPictureModal({
  src,
  name,
  sex,
  age,
  date,
  arrow,
  birthCity,
  agreementPercent,
  open,
  setOpen,
}: ReportPictureModalProps) {
  return (
    <CustomModal open={open} setOpen={setOpen}>
      <ReportPictureBox
        src={src}
        name={name}
        sex={sex}
        date={date}
        age={age}
        arrow={arrow}
        birthCity={birthCity}
        agreementPercent={agreementPercent}
      />
    </CustomModal>
  );
}
