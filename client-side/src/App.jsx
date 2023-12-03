import { useState } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductGrid from "./components/ProductGrid";
import ProductFilter from "./components/ProductFilter";
import useProducts from "./hooks/useProducts";
import Footer from "./components/Footer";
import Signup from "./components/Signup";

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
      <Signup />
      <div className="bg-slate-100 my-0">
        <ProductFilter onFilterChange={handleFilterChange} />
        <ProductGrid products={filteredProducts} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
