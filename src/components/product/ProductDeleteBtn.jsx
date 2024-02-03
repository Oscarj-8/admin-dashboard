import PropTypes from "prop-types";

const ProductDeleteBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 w-[5em] py-2 bg-red-50 text-red-700 transition-colors delay-300 ease-in  hover:bg-red-700 hover:text-white rounded-md"
    >
      Delete
    </button>
  );
};

ProductDeleteBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ProductDeleteBtn;
