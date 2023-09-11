import { useEffect, useState } from 'react';
import { ChatRoomMessage } from './ChatRoomMessage';
import { socket } from '../websocket';

interface Message {
  room: string;
  author: string;
  message: string;
}

export function ChatRoomMessageList() {
  const [messageList, setMessageList] = useState<Message[]>([]);

  useEffect(() => {
    if (socket) {
      socket.on('receive_message', (data) => {
        setMessageList((prevList) => [...prevList, data]);
      });
    }
  }, [socket]);

  return (
    <div className="max-w-md w-full flex flex-col gap-3">
      {messageList.map((message, index) => (
        <ChatRoomMessage
          room={message.room}
          author={message.author}
          message={message.message}
          key={index}
        />
      ))}
    </div>
  );
}
