import { useState, useEffect } from "react";
import AddProduct from "../components/product/AddProduct";
import EditProductModal from "../components/product/EditProductModal";
import ProductCard from "../components/product/ProductCard";
import Paginate from "../components/Paginate";
import { v4 as uuidv4 } from "uuid";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [success, setSuccess] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(10);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = products.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAddProduct = (newProduct) => {
    try {
      const productId = uuidv4();
      const updatedProducts = [...products, { ...newProduct, id: productId }];
      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      setIsAddProductModalOpen(false);
    } catch (error) {
      console.error(error);
    }
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
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setDeleteSuccess(true); // Set delete success to true
    setTimeout(() => {
      setDeleteSuccess(false);
    }, 3000);
  };

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products"));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);
  return (
    <div className={`flex-1`}>
      {success && (
        <p className="absolute w-60 text-center top-24 left-1/2 transform -translate-x-1/2 bg-green-500 text-white border px-6 py-2 rounded-lg">
          Product has been created!
        </p>
      )}
      {deleteSuccess && (
        <p className="absolute w-60 text-center top-24 left-1/2 transform -translate-x-1/2 bg-red-500 text-white border px-6 py-2 rounded-lg">
          Product has been deleted!
        </p>
      )}
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
        {currentCards.map((product) => (
          <ProductCard
            key={product.id.toString()}
            product={{ ...product, id: product.id.toString() }}
            onEdit={handleEditProduct}
            handleDeleteProduct={handleDeleteProduct}
          />
        ))}
      </div>

      <Paginate
        currentPage={currentPage}
        cardsPerPage={cardsPerPage}
        totalCards={products.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ProductManagement;
