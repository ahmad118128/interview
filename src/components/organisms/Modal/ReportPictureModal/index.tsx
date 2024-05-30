import Image from 'next/image';
import { ReportPictureModalProps } from './type';
import ReportPictureBox from './ReportPicBox';
import CustomModal from '../CustomModal';

export default function ReportPictureModal(props: ReportPictureModalProps) {
  const { data, open, setOpen, title } = props;
  const { src, name, sex, age, date, arrow, birthCity, agreementPercent } =
    data;
  return (
    <CustomModal open={open} setOpen={setOpen} title={title}>
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
