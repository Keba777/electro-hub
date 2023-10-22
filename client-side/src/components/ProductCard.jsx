import useProducts from "../hooks/useProducts";

const ProductCard = () => {
  const { products, error, isLoading } = useProducts();
  return (
    <div className="m-10 mx-32 grid grid-cols-4 gap-8">
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-slate-200 w-48 py-4 border rounded-lg"
        >
          <div className="flex justify-center">
            <img
              className="w-32 mx-3  rounded-5"
              src={`http://localhost:5000/uploads/${product.image}`}
              alt={product.name}
            />
          </div>

          <div className="mt-4">
            <h2 className="flex justify-center text-red-700 text-lg font-bold">
              {product.name}{" "}
            </h2>
            <p className="flex justify-center">${product.price}</p>
          </div>
          <div className="flex justify-center">
            <button className="bg-gray-600 py-3 px-5 text-gray-100 font-semibold rounded-lg border-b-2 border-yellow-600 hover:bg-gradient-to-t from-yellow-600 via-yellow-600 to-gray-800">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
