import Stripe from "stripe";

interface IFilteredProducts {
  products: Stripe.Product[];
  searchTerm: string;
}

const filterProducts = ({ products, searchTerm }: IFilteredProducts) => {
  const search = searchTerm.toLowerCase();
  if (!search) return products;

  return products.filter((product) => {
    const name = product.name.toLowerCase();
    const desc = product.description?.toLowerCase() || "";

    return name.includes(search) || desc.includes(search);
  });
};
export default filterProducts;
