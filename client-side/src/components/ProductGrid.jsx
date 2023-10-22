/* eslint-disable react/prop-types */
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  const { error, isLoading } = useProducts();
  return (
    <div className="py-10 mx-32 grid grid-cols-5 gap-8">
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
