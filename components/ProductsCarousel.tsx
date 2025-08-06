"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Stripe from "stripe";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

interface IProductCarouselProps {
  products: Stripe.Product[];
}

const ProductsCarousel = ({ products }: IProductCarouselProps) => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  if (!products || products.length === 0) return null;

  return (
    <Carousel
      className="w-full"
      plugins={[plugin.current]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {products.map((product, index) => {
          const priceObj = product.default_price as Stripe.Price;
          const price = ((priceObj.unit_amount ?? 0) / 100).toFixed(2);

          return (
            <CarouselItem key={index}>
              <div className="p-1 h-[400px]">
                {" "}
                {/* Fixed height */}
                <Card className="h-full py-0">
                  <CardContent className="relative h-full p-0 overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    {/* Text Overlay */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 text-white px-4 py-2 rounded-md backdrop-blur-sm text-center max-w-[80%]">
                      <h3 className="text-base sm:text-lg font-bold">
                        {product.name}
                      </h3>
                      <p className="text-sm sm:text-base font-medium mt-1">
                        ${price}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default ProductsCarousel;
