import { getAuthenticatedUser } from "../_lib/auth";
import type { ShoppingList } from "../_types/shopping-list";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getShoppingList = async (): Promise<ShoppingList> => {
  if (!API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL não configurada.");
  }

  const user = getAuthenticatedUser();

  if (!user) {
    throw new Error("Usuário não autenticado.");
  }

  const response = await fetch(`${API_URL}/shopping-list/${user.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Erro ao buscar lista de compras.");
  }

  return data;
};
