import { useState } from "react";
import PropTypes from "prop-types";
import ReusableModal from "./Modal";

const AddProduct = ({ isOpen, onClose, onAddProduct }) => {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");

  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !size || !price) {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 5000);
      return;
    }

    const newProduct = { name, size, price };

    onAddProduct(newProduct);

    onClose();

    setName("");
    setSize("");
    setPrice("");
    setIsError(false);
  };

  return (
    <ReusableModal isOpen={isOpen} onClose={onClose}>
      <div className="p-2 w-[16em] md:w-[20em]">
        <h1 className="text-2xl font-semibold mb-4">Add Product</h1>
        {isError && (
          <p className="text-xs text-red-500">Please fill out all fields</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg mb-1">
              Product Name:
            </label>
            <input
              id="name"
              type="text"
              className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="size" className="block text-lg mb-1">
              Product Size:
            </label>
            <input
              id="size"
              type="number"
              className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-lg mb-1">
              Product Price:
            </label>
            <input
              id="price"
              type="number"
              className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex justify-start">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out"
            >
              Add Product
            </button>
            <button
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-6 rounded-md ml-4 transition duration-300 ease-in-out"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </ReusableModal>
  );
};

AddProduct.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddProduct: PropTypes.func.isRequired,
};

export default AddProduct;
