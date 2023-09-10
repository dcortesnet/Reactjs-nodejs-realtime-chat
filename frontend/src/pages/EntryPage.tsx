import { EntryForm } from '../components/EntryForm';
import { Title } from '../components/Title';

export function EntryPage() {
  return (
    <div className="h-full flex flex-col justify-center items-center p-5">
      <Title title="Entry Page" />
      <EntryForm />
    </div>
  );
}
