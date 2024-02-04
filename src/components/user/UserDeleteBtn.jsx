import { useState } from "react";
import PropTypes from "prop-types";
import DeleteUserModal from "../user/DeleteUserConfirmation";

const UserDeleteBtn = ({ onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    onDelete();
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={handleDelete}
        className="px-4 w-[5em] py-2 bg-red-50 text-red-700 transition-colors delay-300 ease-in hover:bg-red-700 hover:text-white rounded-md"
      >
        Delete
      </button>
      <DeleteUserModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onDelete={handleConfirmDelete}
      />
    </>
  );
};

UserDeleteBtn.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default UserDeleteBtn;
