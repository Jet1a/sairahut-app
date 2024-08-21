import { useState, useCallback } from 'react';
import Cookies from 'js-cookie';

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

const ActionButton = ({ user }: { user: User }) => {
  const [users, setUsers] = useState<User[]>([]);
  const token = Cookies.get('token');
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState<User | null>(null);

  const deleteUser = useCallback(
    async (studentID: string) => {
      try {
        const response = await fetch(
          `api/users/deleteUser/${studentID}`,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        setUsers((prevUsers) => prevUsers.filter((u) => u.student_id !== studentID));
      } catch (err) {
        console.error('Error deleting user:', err);
      }
    },
    [token]
  );

  const handleEditClick = (user: User) => {
    setEditMode(true);
    setEditedUser(user);
  };

  const handleEditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const updatedUser = {
      student_id: formData.get('student_id') as string,
      name: formData.get('name') as string,
      house_name: formData.get('house_name') as string,
      code: formData.get('code') as string,
      hint_1: formData.get('hint_1') as string,
      hint_2: formData.get('hint_2') as string,
      hint_3: formData.get('hint_3') as string,
      hint_4: formData.get('hint_4') as string,
    };

    try {
      const response = await fetch(`api/users/updateUser`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedUser),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.student_id === updatedUser.student_id ? updatedUser : u))
      );
    } catch (err) {
      console.error('Error updating user:', err);
    }

    setEditMode(false);
  };

  return (
    <div>
      <button onClick={() => handleEditClick(user)}>Edit</button>
      <button onClick={() => deleteUser(user.student_id)}>Delete</button>

      {editMode && editedUser && (
        <form onSubmit={handleEditSubmit}>
          <input type="text" name="student_id" defaultValue={editedUser.student_id} />
          <input type="text" name="name" defaultValue={editedUser.name} />
          <input type="text" name="house_name" defaultValue={editedUser.house_name} />
          <input type="text" name="code" defaultValue={editedUser.code} />
          <input type="text" name="hint_1" defaultValue={editedUser.hint_1} />
          <input type="text" name="hint_2" defaultValue={editedUser.hint_2} />
          <input type="text" name="hint_3" defaultValue={editedUser.hint_3} />
          <input type="text" name="hint_4" defaultValue={editedUser.hint_4} />
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default ActionButton;