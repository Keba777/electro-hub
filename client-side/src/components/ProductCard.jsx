/* eslint-disable react/prop-types */

const ProductCard = ({ product }) => {
  return (
    <div className="bg-slate-300  py-4 border rounded-lg">
      <div className="flex justify-center">
        <img
          className="w-28 h-32 mx-3  rounded-5"
          src={`http://localhost:5000/uploads/${product.image}`}
          alt={product.name}
        />
      </div>

      <div className="mt-4">
        <h2 className="flex justify-center text-red-700 text-lg font-bold">
          {product.name}{" "}
        </h2>
        <p className=" font-semibold flex justify-center">${product.price}</p>
      </div>
      <div className="flex justify-center">
        <button className="bg-slate-500 py-2 px-4 text-gray-100 font-semibold text-sm rounded-lg border-b-2 border-yellow-600 hover:bg-yellow-600 ">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
