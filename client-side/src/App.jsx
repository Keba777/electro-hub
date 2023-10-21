import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ProductCard />
    </div>
  );
}

export default App;
