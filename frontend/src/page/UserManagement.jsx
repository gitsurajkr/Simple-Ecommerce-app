import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'Manager' },
    { name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  ]);

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: '',
  });

  // Add new user
  const handleAddUser = () => {
    if (newUser.name && newUser.email && newUser.role) {
      setUsers([...users, newUser]);
      setNewUser({ name: '', email: '', role: '' });
    }
  };

  // Delete user
  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  // Change user role
  const handleChangeRole = (index, newRole) => {
    const updatedUsers = [...users];
    updatedUsers[index].role = newRole;
    setUsers(updatedUsers);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 max-w-full lg:max-w-4xl xl:max-w-6xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Manage Users</h2>

      {/* Add User Form */}
      <div className="mb-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-semibold mb-2">Add New User</h3>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="p-2 border border-gray-300 rounded-md w-full"
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="p-2 border border-gray-300 rounded-md w-full"
          />
          <select
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            className="p-2 border border-gray-300 rounded-md w-full md:w-1/3"
          >
            <option value="" disabled>Select role</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="User">User</option>
          </select>
        </div>
        <button
          onClick={handleAddUser}
          className="bg-gray-700 text-white px-8 py-2 rounded-md w-full md:w-auto hover:bg-black"
        >
          Add User
        </button>
      </div>

      {/* User List */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="text-left bg-gray-100">
              <th className="p-2 border-b">Name</th>
              <th className="p-2 border-b">Email</th>
              <th className="p-2 border-b">Role</th>
              <th className="p-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">
                  <select
                    value={user.role}
                    onChange={(e) => handleChangeRole(index, e.target.value)}
                    className="p-1 border border-gray-300 rounded-md"
                  >
                    <option value="Admin">Admin</option>
                    <option value="Manager">Manager</option>
                    <option value="User">User</option>
                  </select>
                </td>
                <td className="p-2">
                  <button
                    onClick={() => handleDeleteUser(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
