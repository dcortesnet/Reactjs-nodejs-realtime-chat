import { ChatRoomMessage } from './ChatRoomMessage';

export function ChatRoomMessageList() {
  return (
    <div className="max-w-md w-full flex flex-col gap-3">
      <ChatRoomMessage />
      <ChatRoomMessage />
    </div>
  );
}
