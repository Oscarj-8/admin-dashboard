import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReusableModal from "../Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const EditProductModal = ({ isOpen, onClose, product, onUpdateProduct }) => {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("New");

  useEffect(() => {
    if (product) {
      setName(product.name);
      setSize(product.size);
      setPrice(product.price);
      setStatus(product.status);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProduct({ ...product, name, size, price, status });
    onClose();
  };

  if (!product) return null;

  return (
    <ReusableModal isOpen={isOpen} onClose={onClose}>
      <div className="p-2 w-[18em] md:w-[26em]">
        <div>
          <h1 className="text-xl mb-4">Edit Product</h1>
          <FontAwesomeIcon
            icon={faClose}
            className="text-2xl text-slate-00 cursor-pointer"
            onClick={onClose}
          />
        </div>
        <hr className="mb-4" />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 items-start"
        >
          <div className="flex flex-col  w-full items-stretch justify-center">
            <label className="text-lg">Product Name:</label>
            <input
              type="text"
              className="border w-full rounded-sm border-gray-300 p-2 focus:outline-none focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col  w-full items-stretch justify-center">
            <label className="text-lg">Product Size:</label>
            <input
              type="number"
              className="border w-full rounded-sm border-gray-300 p-2 focus:outline-none focus:border-blue-500"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full items-stretch justify-center">
            <label className="text-lg">Product Price:</label>
            <input
              type="number"
              className="border w-full rounded-sm border-gray-300 p-2 focus:outline-none focus:border-blue-500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-lg mb-1">Product status:</label>
            <div className="flex items-center space-x-4">
              <label htmlFor="new" className="flex items-center">
                <input
                  type="radio"
                  id="new"
                  name="status"
                  value="New"
                  checked={status === "New"}
                  onChange={() => setStatus("New")}
                />
                <span className="ml-2">New</span>
              </label>
              <label htmlFor="old" className="flex items-center">
                <input
                  type="radio"
                  id="old"
                  name="status"
                  value="Old"
                  checked={status === "Old"}
                  onChange={() => setStatus("Old")}
                />
                <span className="ml-2">Old</span>
              </label>
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            <button
              type="submit"
              className="border w-[6em] px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className="border  w-[6em] px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </ReusableModal>
  );
};

EditProductModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }),
  onUpdateProduct: PropTypes.func.isRequired,
};

export default EditProductModal;
