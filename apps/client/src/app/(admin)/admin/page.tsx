'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Cookies from 'js-cookie';

const AdminPage: React.FC = () => {
  useAuth();
  const token = Cookies.get('token');
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState('');

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch(`http://localhost:8000/users/updateUserToDB`, {
        method: 'POST',
        headers,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: User[] = await response.json();
      setUsers(data);
      setFilteredUsers(data);
    } catch (err) {
      console.error('Error fetching user data:', err);
    }
  };

  const addUser = async (user: Partial<User>) => {
    try {
      const response = await fetch(`http://localhost:8000/users/addUser`, {
        method: 'POST',
        headers,
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      fetchUsers(); 
    } catch (err) {
      console.error('Error adding user:', err);
    }
  };

  const updateUser = async (user: User) => {
    try {
      const response = await fetch(`http://localhost:8000/users/updateUser`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      fetchUsers(); 
    } catch (err) {
      console.error('Error updating user:', err);
    }
  };

  const deleteUser = async (studentID: string) => {
    try {
      const response = await fetch(`http://localhost:8000/users/deleteUser`, {
        method: 'DELETE',
        headers,
        body: JSON.stringify({ student_id: studentID }),
      });
      if (response.ok) {
        fetchUsers();
      }
    } catch (err) {
      console.error('Error deleting user:', err);
    }
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = e.target.value;
    setFilter(filterValue);

    if (filterValue) {
      const filtered = users.filter((user) =>
        user.student_id.endsWith(filterValue)
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5 text-center">Admin Page</h1>

      {/* Filter input */}
      <div className="mb-5">
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Search by last 3 digits of Student ID"
          className="px-4 py-2 border rounded w-full mb-3"
        />
      </div>

      {/* Form to add a new user */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const newUser = {
            student_id: formData.get('student_id'),
            name: formData.get('name'),
            house_name: formData.get('house_name'),
            code: formData.get('code'),
            hint_1: formData.get('hint_1'),
            hint_2: formData.get('hint_2'),
            hint_3: formData.get('hint_3'),
            hint_4: formData.get('hint_4'),
          };
          addUser(newUser as Partial<User>);
        }}
      >
        <input name="student_id" placeholder="Student ID" required className="mb-3 px-4 py-2 border rounded w-full"/>
        <input name="name" placeholder="Name" required className="mb-3 px-4 py-2 border rounded w-full"/>
        <input name="house_name" placeholder="House Name" required className="mb-3 px-4 py-2 border rounded w-full"/>
        <input name="code" placeholder="Code" required className="mb-3 px-4 py-2 border rounded w-full"/>
        <input name="hint_1" placeholder="Hint 1" required className="mb-3 px-4 py-2 border rounded w-full"/>
        <input name="hint_2" placeholder="Hint 2" required className="mb-3 px-4 py-2 border rounded w-full"/>
        <input name="hint_3" placeholder="Hint 3" required className="mb-3 px-4 py-2 border rounded w-full"/>
        <input name="hint_4" placeholder="Hint 4" required className="mb-3 px-4 py-2 border rounded w-full"/>
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">Add User</button>
      </form>

      {/* Display filtered user data */}
      <table className="w-full mt-5 border-collapse shadow-lg">
        <thead>
          <tr>
            <th className="border p-3 bg-blue-500 text-white">Student ID</th>
            <th className="border p-3 bg-blue-500 text-white">Name</th>
            <th className="border p-3 bg-blue-500 text-white">House Name</th>
            <th className="border p-3 bg-blue-500 text-white">Code</th>
            <th className="border p-3 bg-blue-500 text-white">Hint 1</th>
            <th className="border p-3 bg-blue-500 text-white">Hint 2</th>
            <th className="border p-3 bg-blue-500 text-white">Hint 3</th>
            <th className="border p-3 bg-blue-500 text-white">Hint 4</th>
            <th className="border p-3 bg-blue-500 text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.student_id} className="hover:bg-gray-100 transition">
                <td className="border p-3">{user.student_id}</td>
                <td className="border p-3">{user.name}</td>
                <td className="border p-3">{user.house_name}</td>
                <td className="border p-3">{user.code}</td>
                <td className="border p-3">{user.hint_1}</td>
                <td className="border p-3">{user.hint_2}</td>
                <td className="border p-3">{user.hint_3}</td>
                <td className="border p-3">{user.hint_4}</td>
                <td className="border p-3">
                  <button onClick={() => updateUser(user)} className="mr-2 px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">Edit</button>
                  <button onClick={() => deleteUser(user.student_id)} className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9} className="border p-3 text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
