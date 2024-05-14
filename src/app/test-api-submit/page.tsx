'use client';
import { CustomButton } from '@/components/atoms/CustomButton';
import { IPost } from '@/services/api/posts/type';
import { useAddPosts } from '@/services/api/posts/useAddPost';
import { useNotificationsStore } from '@/stores/notifications';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function TestSubmitPage() {
  const { register, handleSubmit } = useForm<IPost>();
  const router = useRouter();

  const showNotification = useNotificationsStore(
    (state) => state.showNotification
  );

  const addPost = useAddPosts();

  const onSubmit = (data: IPost) => {
    addPost.post(data, {
      onSuccess: () => {
        router.push('./test-api');
        showNotification({
          message: 'اطلاعات با موفقیت ثبت شد',
          type: 'success',
        });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" id="userId" value="1" {...register('userId')} />
      <Box display="flex" marginBlock="1rem" gap="0.5rem">
        <input
          id="title"
          {...register('title', {
            required: true,
          })}
        />
        <label htmlFor="title">Title</label>
      </Box>

      <Box display="flex" gap="0.5rem">
        <input
          id="body"
          {...register('body', {
            required: true,
          })}
        />
        <label htmlFor="body">Body</label>
      </Box>

      <CustomButton
        type="submit"
        loading={addPost.isPending}
        sx={{ marginTop: '0.5rem' }}
      >
        Submit
      </CustomButton>
    </form>
  );
}
