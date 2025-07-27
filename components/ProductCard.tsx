import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Stripe from "stripe";
import Link from "next/link";

const ProductCard = ({ product }: { product: Stripe.Product }) => {
  const priceObj = product.default_price as Stripe.Price;
  const price = ((priceObj.unit_amount ?? 0) / 100).toFixed(2);

  return (
    <Card className="w-full max-w-sm mx-auto flex flex-col h-full">
      <div className="relative w-full h-60">
        <Image
          src={product.images?.[0] || "/placeholder.png"}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        {product.description && (
          <CardDescription>{product.description}</CardDescription>
        )}
      </CardHeader>

      <CardContent>
        <p className="text-lg font-semibold">${price}</p>
      </CardContent>

      <CardFooter className="mt-auto">
        <Link
          href={`/products/${product.id}`}
          className="w-full  inline-flex items-center justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Buy Now
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
