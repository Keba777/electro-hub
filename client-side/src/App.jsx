import { useState } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductGrid from "./components/ProductGrid";
import ProductFilter from "./components/ProductFilter";
import ProductForm from "./components/ProductForm";
import useProducts from "./hooks/useProducts";

function App() {
  const { products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (selectedType) => {
    if (selectedType === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.type === selectedType
      );
      setFilteredProducts(filtered);
    }
  };
  return (
    <div>
      <NavBar />
      <Hero />
      <ProductFilter onFilterChange={handleFilterChange} />
      <ProductGrid products={filteredProducts} />
      <ProductForm />
    </div>
  );
}

export default App;
