import { create, useStore } from 'zustand';

import { uid } from '@/utils/uid';

export type NotificationType = 'info' | 'warning' | 'success' | 'error';

export type Notification = {
  id: string;
  type: NotificationType;
  message: string;
};

export type NotificationsStore = {
  notifications: Notification[];
  showNotification: (notification: Omit<Notification, 'id'>) => void;
  dismissNotification: (id: string) => void;
};

export const useNotificationsStore = create<NotificationsStore>((set, get) => ({
  notifications: [],
  showNotification: (notification) => {
    const id = uid();
    set((state) => ({
      notifications: [...state.notifications, { id: id, ...notification }],
    }));

    setTimeout(() => {
      get().dismissNotification(id);
    }, 5000);
  },
  dismissNotification: (id) => {
    set((state) => ({
      notifications: state.notifications.filter((p) => p.id !== id),
    }));
  },
}));

export const showNotification = (notifications: Omit<Notification, 'id'>[]) => {
  notifications.forEach((p) =>
    useNotificationsStore.getState().showNotification(p)
  );
};
