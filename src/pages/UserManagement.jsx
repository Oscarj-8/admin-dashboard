import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AddUser from "../components/AddUser";
import EditUserModal from "../components/EditUserModal";
import UserEditBtn from "../components/UserEditBtn";
import UserDeleteBtn from "../components/UserDeleteBtn";
import UserViewBtn from "../components/UserViewBtn";
import Paginate from "../components/Paginate";
import { v4 as uuidv4 } from "uuid";

const UserCard = ({ user, onEdit, onDelete }) => (
  <div className="w-[300px] md:w-[400px] border rounded overflow-hidden shadow-lg bg-white mx-2 mt-4 p-6 flex flex-col gap-2">
    <div className="">
      <div className="flex items-baseline gap-1">
        <span className="font-normal md:text-lg">User name: </span>
        <p className="text-gray-700">{user.name}</p>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="font-normal">User email: </span>
        <p className="text-gray-900 font-medium text-xs">{user.email}</p>
      </div>
    </div>
    <div className="flex justify-start gap-2">
      <UserViewBtn user={user} />
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
  const [success, setSuccess] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(8);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = users.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAddUser = (newUser) => {
    try {
      const userId = uuidv4();
      const updatedUsers = [...users, { ...newUser, id: userId }];
      setUsers(updatedUsers);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setIsAddUserModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditUser = (user) => {
    try {
      setSelectedUser(user);
      setIsEditUserModalOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateUser = (updatedUser) => {
    try {
      const updatedUsers = users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      );
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setIsEditUserModalOpen(false);
    } catch (error) {
      console.error(error);
    }
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
    <div className={`flex-1`}>
      {success && (
        <p className="absolute w-56 text-center top-24 left-1/2 transform -translate-x-1/2 bg-green-500 text-white border px-6 py-2 rounded-lg">
          User has been created!
        </p>
      )}
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
      <div className="flex flex-wrap justify-center md:justify-start ">
        {currentCards.map((user) => (
          <UserCard
            key={user.id.toString()}
            user={{ ...user, id: user.id.toString() }}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
          />
        ))}
      </div>

      <Paginate
        currentPage={currentPage}
        cardsPerPage={cardsPerPage}
        totalCards={users.length}
        paginate={paginate}
      />
    </div>
  );
};

UserCard.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

export default UserManagement;
