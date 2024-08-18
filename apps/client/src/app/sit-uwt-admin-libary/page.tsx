'use client'

import React, { useEffect, useState } from 'react';

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`/api/users/`); 
        const data = await response.json();
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
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>student_id</th>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>name</th>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>house_name</th>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>code</th>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>hint_1</th>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>hint_2</th>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>hint_3</th>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>hint_4</th>
          </tr>
        </thead>
        {/* <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
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
        </tbody> */}
      </table>
    </div>
  );
};

export default AdminPage;