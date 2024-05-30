import { Box } from '@mui/material';
import { StyledImage, StyledWrapperModal } from './styled';
import { reportPicModalProps } from './type';

export default function ReportPictureBox({
  src,
  name,
  sex,
  age,
  date,
  arrow,
  birthCity,
  agreementPercent,
}: reportPicModalProps) {
  return (
    <StyledWrapperModal>
      <StyledImage alt={src} src={src} width={180} height={180} />
      <Box>
        <ul>
          <li>نام گیت {name}</li>
          <li> جنسیت {sex}</li>
          <li> سن {age}</li>
          <li> زمان ثبت {date}</li>
          <li>جهت گیت {arrow}</li>
          <li>محل تولد {birthCity}</li>
          <li> درصد تطابق {agreementPercent}</li>
        </ul>
      </Box>
    </StyledWrapperModal>
  );
}
