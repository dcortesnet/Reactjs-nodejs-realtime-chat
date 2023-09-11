import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

interface UserContextData {
  userData: {
    email: string;
    room: string;
  };
  setUserData: Dispatch<
    SetStateAction<{
      email: string;
      room: string;
    }>
  >;
}

export const UserContext = createContext<UserContextData>({
  userData: {
    email: '',
    room: '',
  },
  setUserData: () => {},
});

interface Props {
  children: ReactNode;
}

export function UserProvider({ children }: Props) {
  const [userData, setUserData] = useState<{ email: string; room: string }>({
    email: '',
    room: '',
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
