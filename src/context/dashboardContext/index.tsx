import { createContext, useState } from 'react';
import { TSidebarContext } from './type';

const openDashboardState = {
  isOpen: false,
  setIsOpen: () => true,
};

export const openDashboard = createContext<TSidebarContext>(openDashboardState);

export default function DashboardContextProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <openDashboard.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </openDashboard.Provider>
  );
}
