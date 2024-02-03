import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductEditBtn = ({ product }) => {
  return (
    <Link to={`/productInfo/${product.id}`}>
      <button className="px-4 w-[5em] py-2 transition-colors delay-300 ease-in text-yellow-500 bg-yellow-50 hover:bg-yellow-500 hover:text-white rounded-md">
        View
      </button>
    </Link>
  );
};

ProductEditBtn.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductEditBtn;
