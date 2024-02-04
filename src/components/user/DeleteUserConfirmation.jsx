import PropTypes from "prop-types";
import ReusableModal from "../Modal";

const DeleteUserModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <ReusableModal isOpen={isOpen} onClose={onClose}>
      <div className="p-2 w-[300px] md:w-[400px]">
        <p className="text-lg mb-4">
          Are you sure you want to delete this user?
          <span className="text-sm block text-red-600">
            This action cannot be undone.
          </span>
        </p>

        <div className="flex justify-start gap-4">
          <button
            onClick={onDelete}
            className="px-4 py-2 w-[100px] bg-red-500 text-white rounded-md"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 w-[100px] bg-gray-300 text-gray-800 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </ReusableModal>
  );
};

DeleteUserModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteUserModal;
