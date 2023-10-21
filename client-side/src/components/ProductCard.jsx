import useProducts from "../hooks/useProducts";

const ProductCard = () => {
  const { products, error, isLoading } = useProducts();
  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      {products.map((product) => (
        <div key={product._id}>
          <img
            className="w-32 h-32 mx-3  rounded-5"
            src={`http://localhost:5000/uploads/${product.image}`}
            alt={product.name}
          />
          <div>
            <h2 className="text-primary">{product.name} </h2>
            <p className="text-primary">{product.description} </p>
            <p className="text-secondary">{product.price}</p>
            <p className="text-secondary">{product.brand}</p>
            <p className="text-secondary">{product.color}</p>
            <p className="text-secondary">{product.storage}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
