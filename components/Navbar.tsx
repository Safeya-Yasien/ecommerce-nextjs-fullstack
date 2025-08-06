"use client";

import Link from "next/link";
import {
  Bars2Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/cart-store";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { items } = useCartStore();

  const cartItemCount = items.reduce((count, item) => count + item.quantity, 0);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      {/* logo */}
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link href="/" className="" aria-label="Home">
          My Ecommerce
        </Link>
        {/* nav links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600" aria-label="Home">
            Home
          </Link>
          <Link
            href="/products"
            className="hover:text-blue-600"
            aria-label="Products"
          >
            Products
          </Link>
          <Link
            href="/checkout"
            className="hover:text-blue-600"
            aria-label="Checkout"
          >
            Checkout
          </Link>
        </div>

        {/* shopping cart */}
        <div className="flex items-center space-x-4">
          <Link
            href="/checkout"
            className="hover:text-blue-600 relative"
            aria-label="Open cart"
          >
            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            {cartItemCount > 0 && (
              <span className="absolute -top-3 -right-2 h-5 w-5 text-xs text-white bg-red-500 rounded-full flex items-center justify-center ">
                {cartItemCount}
              </span>
            )}
          </Link>

          <Link
            href={"/auth/login"}
            className="hover:text-blue-600"
            aria-label="Login"
          >
            Login
          </Link>

          <Button
            variant={"ghost"}
            className="cursor-pointer md:hidden"
            aria-label="Open menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars2Icon className="h-6 w-6" aria-label="Close menu" />
            )}
          </Button>
        </div>
      </div>

      {/* mobile nav */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link
                href="/"
                className="block hover:text-blue-600"
                aria-label="Home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block hover:text-blue-600"
                aria-label="Products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/checkout"
                className="block hover:text-blue-600"
                aria-label="Checkout"
              >
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  );
};
export default Navbar;
