import type { Product } from "./product";

export type ListItem = {
  id: string;
  quantity: number;
  isChecked: boolean;
  createdAt: string;
  listId: string;
  productId: string;
  product: Product;
};

export type ShoppingList = {
  id: string;
  createdAt: string;
  userId: string;
  items: ListItem[];
  totalEstimado: number;
  totalItens: number;
};
