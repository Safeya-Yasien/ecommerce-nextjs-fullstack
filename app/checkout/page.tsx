"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store";

const CheckoutPage = () => {
  const { items } = useCartStore();

  const total = items.reduce(
    (sum, item) => (sum + item.price * item.quantity) / 100,
    0
  );

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>
      <Card className="max-w-md mx-auto mb-8">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex flex-col gap-2 border-b pb-2">
                <div className="flex justify-between">
                  <span className="font-medium">{item.name}</span>
                  <span className="font-semibold">
                    ${((item.price * item.quantity) / 100).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    –
                  </Button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <Button variant="outline" size="sm">
                    +
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-2 text-lg font-semibold">
            Total: ${total.toFixed(2)}
          </div>
        </CardContent>
      </Card>
      <form className="max-w-md mx-auto">
        <input type="hidden" name="items" />
        <Button type="submit" variant="default" className="w-full cursor-pointer">
          Proceed to Payment
        </Button>
      </form>
    </div>
  );
};
export default CheckoutPage;
