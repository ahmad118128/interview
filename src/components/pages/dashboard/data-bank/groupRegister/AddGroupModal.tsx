'use client';

import CustomModal from '@/components/organisms/Modal/CustomModal';
import { DataBankRoute } from '@/strings';
import { useForm } from 'react-hook-form';
import AddGroupModalForm from './AddGroupModalForm';

export default function AddGroupModal({ isOpen, setIsOpen }: any) {
  const { control, handleSubmit } = useForm();
  return (
    <CustomModal
      open={isOpen}
      setOpen={setIsOpen}
      title={DataBankRoute.addGropModalTitle}
      buttons
      handleClose={() => setIsOpen(false)}
    >
      <AddGroupModalForm control={control} handleSubmit={handleSubmit} />
    </CustomModal>
  );
}
