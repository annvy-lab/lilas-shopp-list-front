"use client";

import { PackageSearch, Search } from "lucide-react";
import { useEffect, useState } from "react";

import type { ShoppingList } from "./_types/shopping-list";
import Footer from "./_components/common/footer";
import Navbar from "./_components/common/navbar";
import ProductItem from "./_components/common/product-item";
import Title from "./_components/common/title";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "./_components/ui/input-group";
import { ScrollArea } from "./_components/ui/scroll-area";
import { getShoppingList } from "./_actions/shopping-list";
import { Spinner } from "./_components/ui/spinner";

export default function Page() {
  const [shoppingList, setShoppingList] = useState<ShoppingList | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchShoppingList = async () => {
      try {
        const data = await getShoppingList();
        setShoppingList(data);
      } catch (error) {
        console.error("Erro ao buscar lista:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchShoppingList();
  }, []);

  return (
    <div className="flex h-svh w-full flex-col overflow-hidden bg-background">
      <Navbar />
      <Title />

      <div className="flex flex-col gap-2 px-6">
        <h3 className="font-semibold text-secondary-foreground">LISTA</h3>

        <div className="mb-1.5 flex items-center justify-between gap-2.5">
          <InputGroup className="rounded-lg">
            <InputGroupInput placeholder="Buscar..." />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>

      <div className="mb-2 min-h-0 flex-1 px-3 pb-0">
        <ScrollArea className="h-full w-full px-2.5">
          <div className="space-y-2 p-1">
            {isLoading ? (
              <div className="flex w-full items-center justify-center p-4 pt-10">
                <Spinner className="size-8 text-primary" />
              </div>
            ) : shoppingList?.items?.length ? (
              shoppingList.items.map((item) => (
                <ProductItem key={item.id} item={item} />
              ))
            ) : (
              <div className="flex w-full flex-col items-center justify-center gap-2 p-4 pt-10">
                <PackageSearch
                  size={60}
                  strokeWidth={0.9}
                  className="text-secondary-foreground/50"
                />
                <p className="text-sm text-secondary-foreground">
                  Sem itens na lista
                </p>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      <Footer
        qtyItems={shoppingList?.totalItens ?? 0}
        totalAmount={shoppingList?.totalEstimado ?? 0}
      />
    </div>
  );
}
