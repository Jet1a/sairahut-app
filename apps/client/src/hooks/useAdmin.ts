'use client';

import Cookies from 'node_modules/@types/js-cookie';
import { useCallback, useMemo, useState } from 'react';

export const useAdmin = () => {
  const token = Cookies.get('token');

  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [showForm, setShowForm] = useState(false);

  const headers = useMemo(
    () => ({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }),
    [token],
  );

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:8000/users/getAllUser`, {
        headers,
      });
      const data: User[] = await response.json();
      setFilteredUsers(data);
    } catch (err) {
      console.error('Error fetching user data:', err);
    }
  }, [headers]);

  const refreshUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/users/updateUserToDB`,
        {
          method: 'PUT',
          headers,
        },
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = (await response.json()) as {
        message: string;
        updates: User[];
      };
      setUsers(data.updates);
      setFilteredUsers(data.updates);
    } catch (err) {
      console.error('Error fetching user data:', err);
    }
  };

  const addUser = useCallback(
    async (user: Partial<User>) => {
      try {
        const response = await fetch(`http://localhost:8000/users/addUser`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        fetchUsers();
        setShowForm(false);
      } catch (err) {
        console.error('Error adding user:', err);
      }
    },
    [fetchUsers],
  );

  const deleteUser = useCallback(
    async (studentID: string) => {
      try {
        const response = await fetch(
          `http://localhost:8000/users/deleteUser/${studentID}`,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          },
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        fetchUsers();
      } catch (err) {
        console.error('Error deleting user:', err);
      }
    },
    [fetchUsers],
  );

  const updateUser = async (updatedUser: User) => {
    try {
      const response = await fetch(`http://localhost:8000/users/updateUser`, {
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

      fetchUsers();
    } catch (err) {
      console.error('Error updating user:', err);
    }
  };
  return {
    users,
    setUsers,
    filteredUsers,
    setFilteredUsers,
    showForm,
    setShowForm,
    fetchUsers,
    refreshUser,
    addUser,
    deleteUser,
    updateUser,
  };
};
