import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import { Notification, showNotification } from '@/stores/notifications';
import { Problem } from '@/services/core/type';

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      // show notification
    },
  }),

  mutationCache: new MutationCache({
    onError: (error: unknown) => {
      showNotifications(error as Problem);
    },
  }),

  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      throwOnError: false,
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
});

const showNotifications = (problem: Problem) => {
  const notifications: Omit<Notification, 'id'>[] = [];

  if (problem.errors) {
    Object.entries(problem.errors).forEach(([_, values]) =>
      values.forEach((errorMessage) =>
        notifications.push({
          message: errorMessage,
          type: 'error',
        })
      )
    );
  } else if (problem.description) {
    notifications.push({
      message: problem.description,
      type: 'error',
    });
  }

  showNotification(notifications);
};
