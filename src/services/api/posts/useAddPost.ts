import { createData } from '@/services/core/http-service';
import { useMutation } from '@tanstack/react-query';

import { IPost } from './type';

const addPost = (model: IPost): Promise<void> =>
  createData<IPost, void>('/posts/', model);

export const useAddPosts = () => {
  const { mutate: post, isPending } = useMutation({
    mutationFn: addPost,
  });

  return {
    post,
    isPending,
  };
};
