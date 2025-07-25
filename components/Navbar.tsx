import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      {/* logo */}
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link href="/" className="">
          My Ecommerce
        </Link>
        {/* nav links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/checkout" className="hover:text-blue-600">
            Checkout
          </Link>
        </div>{" "}
      </div>
    </nav>
  );
};
export default Navbar;
