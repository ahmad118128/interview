import { createData } from '@/services/core/http-service';
import { useMutation } from '@tanstack/react-query';
import { IPost } from './type';

const createPost = (model: IPost): Promise<void> =>
  createData<IPost, void>('/posts/', model);

type usePostOptions = {
  onSuccess?: () => void;
};

export const useCreatePost = ({ onSuccess }: usePostOptions) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: createPost,
    onSuccess: onSuccess,
  });

  return {
    submit,
    isPending,
  };
};
