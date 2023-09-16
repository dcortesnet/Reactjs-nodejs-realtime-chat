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
    <>
      <div className="col-start-1 col-end-8 p-3 rounded-lg">
        <div className="flex flex-row items-center">
          <div
            className={`flex items-center justify-center h-10 w-10 rounded-full ${
              user.email === props.author ? 'bg-sky-300' : ' bg-orange-400'
            } flex-shrink-0`}
          >
            {props.author[0].toUpperCase()}
          </div>
          <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
            <div>Message: {props.message}</div>
          </div>
        </div>
      </div>
    </>
  );
}
