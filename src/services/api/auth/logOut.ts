import { signOut } from 'next-auth/react';

import { API_URL } from '@/configs/global';
import { createData } from '@/services/core/http-service';

export async function logout() {
  createData(`${API_URL}/auth/logout`, null)
    .then(() => {
      return signOut();
    })
    .catch((error) => {
      console.error('Error during logout process:', error);
    });
}
