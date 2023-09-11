import { Button } from 'flowbite-react';
import { socket } from '../websocket';
import { useState } from 'react';
import { useUser } from '../hooks/useUser';

interface Message {
  room: string;
  author: string;
  message: string;
}

export function ChatRoomInput() {
  const user = useUser();
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    if (message !== '' && socket) {
      const data: Message = {
        room: user.userData.room,
        author: user.userData.email,
        message: message,
      };
      await socket.emit('new_message', data);
      setMessage('');
    }
  };

  return (
    <>
      <div className="max-w-md w-full flex flex-col gap-3">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
        <div className="col-span-2 text-right flex justify-end">
          <Button onClick={sendMessage}>Send Message</Button>
        </div>
      </div>
    </>
  );
}
