export type Category =
  | "ALIMENTO"
  | "BEBIDA"
  | "DOCE"
  | "LIMPEZA"
  | "HIGIENE"
  | "FRUTA"
  | "VERDURA"
  | "CARNE"
  | "LATICINIO"
  | "PADARIA"
  | "CONGELADO"
  | "OUTROS";

export type Product = {
  id: string;
  name: string;
  description: string | null;
  price: number | string;
  category: Category;
  createdAt: string;
  userId: string | null;
};
