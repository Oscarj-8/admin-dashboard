import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AddUser from "../components/AddUser";
import EditUserModal from "../components/EditUserModal";
import UserEditBtn from "../components/UserEditBtn";
import UserDeleteBtn from "../components/UserDeleteBtn";

const UserCard = ({ user, onEdit, onDelete }) => (
  <div className="min-w-[300px] rounded overflow-hidden shadow-lg bg-white m-4">
    <div className="px-6 py-2">
      <div className=" ">{user.name}</div>
      <p className="text-gray-700 ">{user.email}</p>
    </div>
    <div className="px-6 py-4 flex justify-start gap-2">
      <UserEditBtn onClick={() => onEdit(user)} />
      <UserDeleteBtn onClick={() => onDelete(user.id)} />
    </div>
  </div>
);

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddUser = (newUser) => {
    const userId = users.length + 1;
    const updatedUsers = [...users, { ...newUser, id: userId }];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
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
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setIsEditUserModalOpen(false);
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  };

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);
  return (
    <div className={` flex-1`}>
      <div className="flex items-end justify-between p-5 shadow-md ">
        {" "}
        <h1 className="text-xl m-auto">User Management</h1>
        <button
          className="bg-green-700 text-white py-2 px-4 rounded-md"
          onClick={() => setIsAddUserModalOpen(true)}
        >
          Add <span className="hidden sm:inline">User</span>
        </button>
      </div>

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
      {/* <table className="table-auto w-full">
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
                <div className="flex gap-4">
                  <UserEditBtn onClick={() => handleEditUser(user)} />
                  <UserDeleteBtn onClick={() => handleDeleteUser(user.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <div className="flex flex-wrap ">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
          />
        ))}
      </div>
    </div>
  );
};

UserCard.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

export default UserManagement;
