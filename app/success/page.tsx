"use client";

import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/cart-store";
import { useEffect } from "react";

const SuccessPage = () => {
  const { clearItems } = useCartStore();

  useEffect(() => {
    clearItems();
  }, [clearItems]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <CheckCircleIcon className="text-green-500 w-20 h-20 mb-4" />
      <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
      <p className="text-lg text-gray-600 mb-6">
        Thank you for your purchase. Your payment has been processed
        successfully.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          href="/"
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-black/80 transition"
        >
          Back to Home
        </Link>
        <Link
          href="/products"
          className="border border-black text-black px-4 py-2 rounded-md hover:bg-gray-100 transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};
export default SuccessPage;
