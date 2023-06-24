import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { getUsers } from 'services/api';

export function useTweets() {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => {
      const res = toast.promise(getUsers, {
        pending: 'Loading...',

        success: 'Success',
      });

      return res;
    },
    staleTime: 1000 * 60 * 5,
  });
}
