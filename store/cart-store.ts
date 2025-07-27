import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ICartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string | null;
}

interface ICartStoreProps {
  items: ICartItem[];
  addItem: (item: ICartItem) => void;
  removeItem: (id: string) => void;
}

export const useCartStore = create<ICartStoreProps>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item: ICartItem) => {
        const existingItem = get().items.find((i) => i.id === item.id);

        if (existingItem) {
          set((state) => ({
            items: state.items.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          }));
        } else {
          set((state) => ({
            items: [...state.items, item],
          }));
        }
      },
      removeItem: () => {

      }
    }),
    { name: "cart" }
  )
);
