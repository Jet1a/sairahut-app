'use client'
import React, { useEffect, useState } from 'react';
import { useAuth } from "@/hooks/useAuth";

const AdminPage: React.FC = () => {
  useAuth();
  const token = localStorage.getItem('token');
  const [users, setUsers] = useState<User[]>([]);
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`http://localhost:8000/users/getAllUser`, {headers});
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        console.error('Error fetching user data:', err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Page</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>Student ID</th>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>House Name</th>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>Code</th>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>Hint 1</th>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>Hint 2</th>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>Hint 3</th>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>Hint 4</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.student_id}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.student_id}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.name}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.house_name}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.code}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.hint_1}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.hint_2}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.hint_3}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.hint_4}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
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
