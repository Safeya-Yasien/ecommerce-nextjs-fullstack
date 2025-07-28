import { stripe } from "@/lib/stripe";
import ProductsList from "@/components/ProductsList";

const ProductsPage = async () => {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold text-center mb-6">All Products</h1>

      <ProductsList products={products.data} />
    </div>
  );
};

export default ProductsPage;
