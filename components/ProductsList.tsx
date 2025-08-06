"use client";
import { useEffect, useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import Stripe from "stripe";
import filterProducts from "@/utils/filterProducts";
import { useDebounce } from "use-debounce";
import { SkeletonProductCard } from "./SkeletonCard";

interface IProductsListProps {
  products: Stripe.Product[];
}

const ProductsList = ({ products }: IProductsListProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchTermDebounced] = useDebounce(searchTerm, 300);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const onSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const filteredProducts = useMemo(() => {
    return filterProducts({
      products,
      searchTerm: searchTermDebounced,
    });
  }, [products, searchTermDebounced]);

  const skeletonCards = Array.from({ length: 8 }, (_, i) => (
    <SkeletonProductCard key={i} />
  ));

  return (
    <>
      {/* search input */}
      <div className="flex justify-center mb-8">
        <label htmlFor="search" className="sr-only">
          Search Products
        </label>
        <input
          id="search"
          type="search"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search products..."
          aria-label="Search products"
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading
          ? skeletonCards
          : filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </>
  );
};
export default ProductsList;
