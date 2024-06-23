import Image from 'next/image';
import { ReportPictureModalProps } from './type';
import ReportPictureBox from './ReportPicBox';
import CustomModal from '../CustomModal';

export default function ReportPictureModal(props: ReportPictureModalProps) {
  const { personInfo, open, id, setOpen, title, onSubmit, buttons, onClose } =
    props;
  const { src, name, sex, age, date, arrow, birthCity, agreementPercent } =
    personInfo;
  return (
    <CustomModal
      onClose={onClose}
      open={open}
      onSubmit={onSubmit}
      buttons={buttons}
      setOpen={setOpen}
      id={id}
      title={title}
    >
      <ReportPictureBox personInfo={personInfo} />
    </CustomModal>
  );
}
