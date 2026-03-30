import {
  Apple,
  Beef,
  Candy,
  Croissant,
  Droplets,
  IceCreamBowl,
  Milk,
  Package,
  Sandwich,
  Sparkles,
  SprayCan,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

import type { Category } from "./product";

export const categoryLabels: Record<Category, string> = {
  ALIMENTO: "Alimentos",
  BEBIDA: "Bebidas",
  DOCE: "Doces",
  LIMPEZA: "Limpeza",
  HIGIENE: "Higiene",
  FRUTA: "Frutas",
  VERDURA: "Verduras",
  CARNE: "Carnes",
  LATICINIO: "Laticínios",
  PADARIA: "Padaria",
  CONGELADO: "Congelados",
  OUTROS: "Outros",
};

export const categoryIcons: Record<Category, LucideIcon> = {
  ALIMENTO: Sandwich,
  BEBIDA: Droplets,
  DOCE: Candy,
  LIMPEZA: SprayCan,
  HIGIENE: Sparkles,
  FRUTA: Apple,
  VERDURA: Apple,
  CARNE: Beef,
  LATICINIO: Milk,
  PADARIA: Croissant,
  CONGELADO: IceCreamBowl,
  OUTROS: Package,
};
