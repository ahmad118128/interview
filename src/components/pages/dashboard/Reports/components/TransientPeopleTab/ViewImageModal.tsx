import ThumbnailPicModal from '@/components/organisms/Modal/ThumbnailPicModal';
import { TableCell, Typography } from '@mui/material';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';
import theme from '@/theme';
export default function ViewImageModal() {
  const [imgModal, setImgModal] = useState(false);

  return (
    <>
      <TableCell>
        <Icon
          icon="tabler:photo-filled"
          width="24"
          height="24"
          color={theme.palette.primary.main}
          style={{ marginLeft: '0.5rem' }}
          onClick={() => setImgModal(true)}
        />
      </TableCell>

      {imgModal ? (
        <ThumbnailPicModal
          handleClose={() => setImgModal(false)}
          open={imgModal}
          setOpen={setImgModal}
          src={'/assets/images/dashboard/technology 1.svg'}
        />
      ) : null}
    </>
  );
}
