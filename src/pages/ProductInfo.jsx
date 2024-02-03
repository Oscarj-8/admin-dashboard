import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const { id } = useParams();

  const stringId = id.toString();

  const products = JSON.parse(localStorage.getItem("products"));
  const product = products.find((product) => product.id === stringId);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="mt-10 bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-semibold mb-4">Product Details</h1>
        <div className="mb-4">
          <p className="text-lg font-semibold">Product name:</p>
          <p className="text-gray-800">{product.name}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Product size:</p>
          <p className="text-gray-800">{product.size}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Product price:</p>
          <p className="text-gray-800">{product.price}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Gender:</p>
          <p className="text-gray-800">{product.status}</p>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
