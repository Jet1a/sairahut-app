import Cookies from 'js-cookie';

interface UserTableProps {
  users: User[];
  onEditClick: (user: User) => void;
  onDeleteClick: (studentID: string) => void;
}

const UserTable: React.FC<UserTableProps> = ({
  users,
  onEditClick,
  onDeleteClick,
}) => {
  return (
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
        {users.length > 0 ? (
          users.map((user) => (
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
                <button
                  onClick={() => onEditClick(user)}
                  className="mr-2 px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteClick(user.student_id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
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
  );
};

export default UserTable;