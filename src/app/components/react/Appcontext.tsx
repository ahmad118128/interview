'use client';
import { useState, createContext, ReactNode } from 'react';

interface IUserContext {
  user: string;
  setUser: (value: string) => void;
}

const ContextProvider = createContext<IUserContext | null>(null);

interface contextPropType {
  children: ReactNode;
}

function ContextProviderUser({ children }: contextPropType) {
  const [user, setUser] = useState('user');

  return (
    <ContextProvider.Provider value={{ user, setUser }}>
      {children}
    </ContextProvider.Provider>
  );
}

export { ContextProviderUser };
