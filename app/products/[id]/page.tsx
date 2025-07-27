import ProductDetails from "@/components/ProductDetails";
import { stripe } from "@/lib/stripe";

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id: productId } = await params;
  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const plainProduct = JSON.parse(JSON.stringify(product));

  return <ProductDetails product={plainProduct} />;
};
export default ProductPage;
