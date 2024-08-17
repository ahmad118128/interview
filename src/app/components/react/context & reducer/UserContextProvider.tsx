// 'use client';
// import { useState, createContext, ReactNode, useReducer } from 'react';

// interface IUserContext {
//   user: string;
//   setUser: (value: string) => void;
// }

// const ContextProvider = createContext<IUserContext | null>(null);

// interface contextPropType {
//   children: ReactNode;
// }

// function ContextProviderUser({ children }: contextPropType) {
//   const userReducer = (action) => {
//     const { type, payload } = action;

//     switch (type) {
//       case 'incrimentment':
//         {...sta}
//     }
//   };

//   const [userState, dispatchUser] = useReducer();

//   return (
//     <ContextProvider.Provider value={{ user, setUser }}>
//       {children}
//     </ContextProvider.Provider>
//   );
// }

// export { ContextProviderUser };
