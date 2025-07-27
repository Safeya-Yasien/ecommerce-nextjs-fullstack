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
  clearItems: () => void;
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
      removeItem: (itemId: string) => {
        set((state) => ({
          items: state.items
            .map((i) =>
              i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
            )
            .filter((i) => i.quantity > 0),
        }));
      },

      clearItems: () => {
        set(() => ({ items: [] }));
      },
    }),
    { name: "cart" }
  )
);
