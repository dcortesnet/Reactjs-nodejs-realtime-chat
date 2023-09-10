import { ChatRoomInput } from '../components/ChatRoomInput';
import { ChatRoomMessageList } from '../components/ChatRoomMessageList';
import { Title } from '../components/Title';
import { useSocket } from '../hooks/useSocket';

export function ChatRoomPage() {
  const socket = useSocket();

  return (
    <div className="h-full flex flex-col justify-center items-center p-5 gap-8">
      <Title title="Chat Room Page" />
      <ChatRoomMessageList />
      <ChatRoomInput />
    </div>
  );
}
