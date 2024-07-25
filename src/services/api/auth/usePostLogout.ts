import { createData } from '@/services/core/http-service';
import { useMutation } from '@tanstack/react-query';

const fetchLogOut = (): Promise<void> => createData('/auth/logout', null);

export const usePostLogOut = () => {
  const { mutate: logout } = useMutation({
    mutationFn: fetchLogOut,
  });

  return logout;
};
