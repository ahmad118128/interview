'use client';

import { useNotificationsStore } from '@/stores/notifications';
import CustomSnackbar from '.';
import { Box } from '@mui/material';

export const Snackbar: React.FC = () => {
  const notifications = useNotificationsStore((state) => state.notifications);
  console.log(notifications);
  const dismissNotification = useNotificationsStore(
    (state) => state.dismissNotification
  );
  if (notifications.length < 1) return null;

  return (
    <Box display="flex" flexDirection="column" gap="0.5rem">
      {notifications.map((p) => {
        return (
          <CustomSnackbar
            key={`notification-${p.id}`}
            open={true}
            message={p.message}
            status={p.type}
            onClose={() => dismissNotification(p.id)}
          />
        );
      })}
    </Box>
  );
};
