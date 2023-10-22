/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const ProductFilter = ({ onFilterChange }) => {
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    // Automatically apply the default filter to show all products
    onFilterChange(selectedType);
  }, [selectedType, onFilterChange]);

  const filterButtons = [
    { label: "All", value: "" },
    { label: "Smartphones", value: "smartphone" },
    { label: "Laptops", value: "laptop" },
    { label: "Tablets", value: "tablet" },
    { label: "Watches", value: "watch" },
  ];

  return (
    <div className="mx-10 py-6">
      <div className="flex space-x-4">
        {filterButtons.map((button) => (
          <button
            key={button.value}
            onClick={() => setSelectedType(button.value)}
            className={`${
              selectedType === button.value
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            } px-4 py-2 rounded-full`}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
