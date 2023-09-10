import { Button, Label, TextInput } from 'flowbite-react';

export function EntryForm() {
  return (
    <form className="max-w-md w-full flex flex-col gap-3">
      <div>
        <div className="block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput
          id="email"
          placeholder="name@flowbite.com"
          required
          type="email"
        />
      </div>
      <div>
        <label
          htmlFor="rooms"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select room
        </label>
        <select
          id="rooms"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="room1" selected>
            Room 1
          </option>
          <option value="room2">Room 2</option>
          <option value="room3">Room 3</option>
        </select>
      </div>
      <div className="col-span-2 text-right flex justify-end">
        <Button>Enter to room</Button>
      </div>
    </form>
  );
}
