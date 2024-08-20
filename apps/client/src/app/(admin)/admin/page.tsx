'use client';

import React, { useEffect, useState } from 'react';

import { useAuth } from '@/hooks/useAuth';
import FilterInput from '@/components/service/FilterInput';
import UserForm from '@/components/service/UserForm';
import UserTable from '@/components/service/UserTable';
import { useAdmin } from '@/hooks/useAdmin';

const AdminPage: React.FC = () => {
  useAuth();

  const {
    users,
    fetchUsers,
    refreshUser,
    addUser,
    updateUser,
    deleteUser,
    showForm,
    setFilteredUsers,
    filteredUsers,
    setShowForm,
  } = useAdmin();

  const [filter, setFilter] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState<User | null>(null);
  const [newUser, setNewUser] = useState<Partial<User>>({
    student_id: '',
    name: '',
    house_name: '',
    code: '',
    hint_1: '',
    hint_2: '',
    hint_3: '',
    hint_4: '',
  });

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    if (filter) {
      const filtered = users.filter(
        (user) =>
          user.student_id.includes(filter) ||
          user.name.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  }, [filter, users, setFilteredUsers]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value.trim());
  };

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

    updateUser(updatedUser);

    setEditMode(false);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5 text-center">Admin Page</h1>

      <FilterInput filter={filter} onFilterChange={handleFilterChange} />

      <div className="mb-5 flex justify-center items-center gap-5">
        <button
          onClick={refreshUser}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          UpdateGGSToMongo
        </button>
        <button
          onClick={() => setShowForm(true)}
          className="ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Add User
        </button>
      </div>

      {showForm && (
        <UserForm
          user={newUser}
          onInputChange={(e) =>
            setNewUser((prevUser) => ({
              ...prevUser,
              [e.target.name]: e.target.value,
            }))
          }
          onSubmit={(e) => {
            e.preventDefault();
            addUser(newUser);
            setShowForm(false); 
          }}
          onCancel={() => setShowForm(false)}
        />
      )}

      {editMode && editedUser && (
        <UserForm
          user={editedUser}
          onInputChange={(e) =>
            setEditedUser({ ...editedUser, [e.target.name]: e.target.value })
          }
          onSubmit={handleEditSubmit}
          onCancel={() => setEditMode(false)}
        />
      )}

      <UserTable
        users={filteredUsers}
        onEditClick={handleEditClick}
        onDeleteClick={deleteUser}
      />
    </div>
  );
};

export default AdminPage;
