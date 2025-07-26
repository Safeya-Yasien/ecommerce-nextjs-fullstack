"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";
import Stripe from "stripe";

interface IProductsListProps {
  products: Stripe.Product[];
}

const ProductsList = ({ products }: IProductsListProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const filteredProducts = products.filter((product) => {
    const searchTermInLowerCase = searchTerm.toLowerCase();
    if (!searchTermInLowerCase) return true;

    const productName = product.name.toLowerCase();
    const productDescription = product.description?.toLowerCase() || "";

    return (
      productName.includes(searchTermInLowerCase) ||
      productDescription.includes(searchTermInLowerCase)
    )
  });

  return (
    <>
      {/* search input */}
      <div className="flex justify-center mb-8">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default ProductsList;
