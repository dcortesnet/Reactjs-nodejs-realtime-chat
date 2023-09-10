import { EntryRoomForm } from '../components/EntryRoomForm';
import { Title } from '../components/Title';

export function EntryRoomPage() {
  return (
    <div className="h-full flex flex-col justify-center items-center p-5">
      <Title title="Entry Room Page" />
      <EntryRoomForm />
    </div>
  );
}
