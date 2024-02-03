import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AddProduct from "../components/AddProduct";
import EditProductModal from "../components/EditProductModal";
import ProductEditBtn from "../components/ProductEditBtn";
import ProductDeleteBtn from "../components/ProductDeleteBtn";
import ProductViewBtn from "../components/ProductViewBtn";
import { v4 as uuidv4 } from "uuid";

const ProductCard = ({ product, onEdit, onDelete }) => (
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
      <ProductDeleteBtn onClick={() => onDelete(product.id)} />
    </div>
  </div>
);

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddProduct = (newProduct) => {
    const productId = uuidv4();
    const updatedProducts = [...products, { ...newProduct, id: productId }];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setIsAddProductModalOpen(false);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsEditProductModalOpen(true);
  };

  const handleUpdateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setIsEditProductModalOpen(false);
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const updatedProducts = products.filter(
        (product) => product.id !== productId
      );
      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    }
  };

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products"));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);
  return (
    <div className={`flex-1`}>
      <div className="flex items-end justify-between p-5 shadow-md ">
        {" "}
        <h1 className="text-xl m-auto">Product Management</h1>
        <button
          className="bg-green-700 text-white py-2 px-4 rounded-md"
          onClick={() => setIsAddProductModalOpen(true)}
        >
          Add <span className="hidden sm:inline">Product</span>
        </button>
      </div>

      <AddProduct
        isOpen={isAddProductModalOpen}
        onClose={() => setIsAddProductModalOpen(false)}
        onAddProduct={handleAddProduct}
      />
      <EditProductModal
        isOpen={isEditProductModalOpen}
        onClose={() => setIsEditProductModalOpen(false)}
        product={selectedProduct}
        onUpdateProduct={handleUpdateProduct}
      />
      <div className="flex flex-wrap justify-center md:justify-start ">
        {products.map((product) => (
          <ProductCard
            key={product.id.toString()}
            product={{ ...product, id: product.id.toString() }}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
};

export default ProductManagement;
