import { ReactNode, createContext, useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';

export const SocketContext = createContext<Socket | null>(null);

interface Props {
  children: ReactNode;
}

export function SocketProvider({ children }: Props) {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socket = io('http://localhost:3000');

    socket.on('connect', () => {
      console.log('Client connected to server socket');
    });

    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
