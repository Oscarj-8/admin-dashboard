import { useState, useEffect } from "react";
import AddUser from "../components/AddUser";
import EditUserModal from "../components/EditUserModal";
import UserEditBtn from "../components/UserEditBtn";
import UserDeleteBtn from "../components/UserDeleteBtn";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddUser = (newUser) => {
    const userId = users.length + 1;
    setUsers([...users, { ...newUser, id: userId }]);
    setIsAddUserModalOpen(false);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsEditUserModalOpen(true);
  };

  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setIsEditUserModalOpen(false);
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
    }
  };

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div>
      <h1>User Management</h1>
      <button onClick={() => setIsAddUserModalOpen(true)}>Add User</button>
      <AddUser
        isOpen={isAddUserModalOpen}
        onClose={() => setIsAddUserModalOpen(false)}
        onAddUser={handleAddUser}
      />
      <EditUserModal
        isOpen={isEditUserModalOpen}
        onClose={() => setIsEditUserModalOpen(false)}
        user={selectedUser}
        onUpdateUser={handleUpdateUser}
      />
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">
                <UserEditBtn onClick={() => handleEditUser(user)} />
                <UserDeleteBtn onClick={() => handleDeleteUser(user.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
