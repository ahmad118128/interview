import Image from 'next/image';
import { ReportPictureModalProps } from './type';
import ReportPictureBox from './ReportPicBox';
import CustomModal from '../CustomModal';

export default function ReportPictureModal(props: ReportPictureModalProps) {
  const {
    data,
    open,
    id,
    setOpen,
    title,
    activeButtonHandler,
    deleteButtonHandler,
    buttons,
    errorTitle,
    handleClose,
  } = props;
  const { src, name, sex, age, date, arrow, birthCity, agreementPercent } =
    data;
  return (
    <CustomModal
      handleClose={handleClose}
      open={open}
      deleteButtonHandler={deleteButtonHandler}
      activeButtonHandler={activeButtonHandler}
      buttons={buttons}
      errorTitle={errorTitle}
      setOpen={setOpen}
      id={id}
      title={title}
    >
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
