import PropTypes from "prop-types";

const ProductEditBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 w-[5em] py-2 text-blue-700 bg-blue-50 transition-colors delay-300 ease-in hover:bg-blue-700 hover:text-white rounded-md"
    >
      Edit
    </button>
  );
};

ProductEditBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ProductEditBtn;
