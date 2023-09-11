import { useEffect, useState } from 'react';
import { ChatRoomMessage } from './ChatRoomMessage';
import { useSocket } from '../hooks/useSocket';

export function ChatRoomMessageList() {
  const socket = useSocket();
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if (socket) {
      socket.on('receive_message', (data) => {
        console.log({ data });
      });
    }
  }, []);

  return (
    <div className="max-w-md w-full flex flex-col gap-3">
      {messageList.map((m) => (
        <ChatRoomMessage />
      ))}
    </div>
  );
}
