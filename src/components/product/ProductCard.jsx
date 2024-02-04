import PropTypes from "prop-types";
import ProductEditBtn from "./ProductEditBtn";
import ProductDeleteBtn from "./ProductDeleteBtn";
import ProductViewBtn from "./ProductViewBtn";

const ProductCard = ({ product, onEdit, handleDeleteProduct }) => (
  <div className="min-w-[300px] border rounded overflow-hidden shadow-lg bg-white mx-2 mt-4 p-4 flex flex-col gap-2">
    <div>
      <div className="flex items-baseline gap-1">
        <span className="font-normal text-lg">Product name: </span>
        <p className="text-gray-700">{product.name}</p>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="font-normal text-lg">Product size:</span>
        <p className="text-gray-700">{product.size} EU</p>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="font-normal text-lg">Product price: </span>
        <p className="text-gray-900 text-lg font-medium">{product.price}$</p>
      </div>
    </div>
    <div className="flex justify-start gap-2">
      <ProductViewBtn product={product} />
      <ProductEditBtn onClick={() => onEdit(product)} />
      <ProductDeleteBtn onDelete={() => handleDeleteProduct(product.id)} />
    </div>
  </div>
);

ProductCard.propTypes = {
  onEdit: PropTypes.func.isRequired,
  handleDeleteProduct: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
};

export default ProductCard;
