import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

interface UserContextData {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  room: string;
  setRoom: Dispatch<SetStateAction<string>>;
}

export const UserContext = createContext<UserContextData>({
  email: '',
  setEmail: () => {},
  room: '',
  setRoom: () => {},
});

interface Props {
  children: ReactNode;
}

export function UserProvider({ children }: Props) {
  const [email, setEmail] = useState('');
  const [room, setRoom] = useState('');

  return (
    <UserContext.Provider value={{ email, setEmail, room, setRoom }}>
      {children}
    </UserContext.Provider>
  );
}
