import PropTypes from "prop-types";

const UserDeleteBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border px-4 py-2 bg-red-500 text-white rounded-md"
    >
      Delete
    </button>
  );
};

UserDeleteBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default UserDeleteBtn;
