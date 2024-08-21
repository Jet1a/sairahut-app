import React from 'react';

interface User {
  student_id: string;
  name: string;
  house_name: string;
  code: string;
  hint_1: string;
  hint_2: string;
  hint_3: string;
  hint_4: string;
}

interface UserFormProps {
  user: Partial<User>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ user, onInputChange, onSubmit, onCancel }) => (
  <form onSubmit={onSubmit} className="mt-5">
    <input
      type="text"
      name="student_id"
      placeholder="Student ID"
      value={user.student_id || ''}
      onChange={onInputChange}
      className="mb-2 p-2 border rounded"
    />
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={user.name || ''}
      onChange={onInputChange}
      className="mb-2 p-2 border rounded"
    />
    <input
      type="text"
      name="house_name"
      placeholder="House Name"
      value={user.house_name || ''}
      onChange={onInputChange}
      className="mb-2 p-2 border rounded"
    />
    <input
      type="text"
      name="code"
      placeholder="Code"
      value={user.code || ''}
      onChange={onInputChange}
      className="mb-2 p-2 border rounded"
    />
    <input
      type="text"
      name="hint_1"
      placeholder="Hint 1"
      value={user.hint_1 || ''}
      onChange={onInputChange}
      className="mb-2 p-2 border rounded"
    />
    <input
      type="text"
      name="hint_2"
      placeholder="Hint 2"
      value={user.hint_2 || ''}
      onChange={onInputChange}
      className="mb-2 p-2 border rounded"
    />
    <input
      type="text"
      name="hint_3"
      placeholder="Hint 3"
      value={user.hint_3 || ''}
      onChange={onInputChange}
      className="mb-2 p-2 border rounded"
    />
    <input
      type="text"
      name="hint_4"
      placeholder="Hint 4"
      value={user.hint_4 || ''}
      onChange={onInputChange}
      className="mb-2 p-2 border rounded"
    />
    <button
      type="submit"
      className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    >
      Submit
    </button>
    <button
      type="button"
      onClick={onCancel}
      className="ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
    >
      Cancel
    </button>
  </form>
);

export default UserForm;