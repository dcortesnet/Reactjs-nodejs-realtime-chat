interface Props {
  room: string;
  author: string;
  message: string;
}

export function ChatRoomMessage(props: Props) {
  return (
    <div className="w-1/2 flex mb-2 justify-start bg-sky-300 rounded ">
      <div className="py-2 px-3">
        <p className="text-sm text-orange">CC: {props.author}</p>
        <p className="text-sm mt-1">{props.message}</p>
        <p className="text-right text-xs text-grey-dark mt-1">
          {new Date().toISOString()}
        </p>
      </div>
    </div>
  );
}
