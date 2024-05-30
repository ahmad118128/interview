import { SetStateAction } from 'react';
import CustomModal from '..';
import Image from 'next/image';
import { thumbnailModalProps } from './type';

export default function ThumbnailPicModal({
  open,
  setOpen,
  title,
  src,
}: thumbnailModalProps) {
  return (
    <CustomModal open={open} setOpen={setOpen}>
      <Image src={src} alt="thumbnailPic" width={349} height={349} />
    </CustomModal>
  );
}
