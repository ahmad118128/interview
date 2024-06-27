import CustomModal from '../CustomModal';
import Image from 'next/image';
import { thumbnailModalProps } from './type';

export default function ThumbnailPicModal({
  open,
  setOpen,
  title,
  src,
  onClose,
}: thumbnailModalProps) {
  return (
    <CustomModal open={open} setOpen={setOpen} onClose={onClose} title={title}>
      <Image src={src} alt="thumbnailPic" width={349} height={349} />
    </CustomModal>
  );
}
