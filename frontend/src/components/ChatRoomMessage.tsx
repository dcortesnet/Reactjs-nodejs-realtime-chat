import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface Props {
  room: string;
  author: string;
  message: string;
}

export function ChatRoomMessage(props: Props) {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div
      className={`flex mb-2 ${
        user.email === props.author ? 'bg-sky-300' : ' bg-orange-400'
      }  rounded `}
    >
      <div className="py-2 px-3">
        <p className="text-sm text-orange">Author: {props.author}</p>
        <p className="text-sm mt-1">Message: {props.message}</p>
      </div>
    </div>
  );
}
