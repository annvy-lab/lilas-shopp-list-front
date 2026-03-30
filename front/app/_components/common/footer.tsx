import { ShoppingBasket } from "lucide-react";

type FooterProps = {
  qtyItems: number;
  totalAmount: number;
};

const Footer = ({ qtyItems, totalAmount }: FooterProps) => {
  const formattedTotalAmount = totalAmount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <footer className="flex w-full items-center justify-between rounded-t-xl bg-primary px-6 py-4 text-background">
      <div className="flex gap-1">
        <ShoppingBasket size={22} />
        <h2 className="mt-[0.05rem] font-bold">{qtyItems}</h2>
      </div>

      <div className="flex items-center gap-1 text-sm font-medium">
        <h2 className="text-lg font-bold">{formattedTotalAmount}</h2>
      </div>
    </footer>
  );
};

export default Footer;
