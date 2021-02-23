import { createContext } from 'react';
import { IUser } from '../interfaces/User';
import { mockUser } from '../mocks/user';
export const userContext = createContext({
  user: mockUser,
  setUser: (currentUser: IUser) => {}
})