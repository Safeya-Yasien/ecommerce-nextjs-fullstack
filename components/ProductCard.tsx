import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Stripe from "stripe";

const ProductCard = ({ product }: { product: Stripe.Product }) => {
  const priceObj = product.default_price as Stripe.Price;
  const price = ((priceObj.unit_amount ?? 0) / 100).toFixed(2);

  return (
    <Card className="w-full max-w-sm overflow-hidden">
      {/* الصورة */}
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

      <CardFooter>
        <Button className="w-full cursor-pointer">Buy Now</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
