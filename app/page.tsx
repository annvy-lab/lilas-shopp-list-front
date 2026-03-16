import { Search } from "lucide-react";

import AddProductButton from "./_components/common/add-product-button";
import Footer from "./_components/common/footer";
import Navbar from "./_components/common/navbar";
import ProductItem from "./_components/common/product-item";
import Title from "./_components/common/title";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "./_components/ui/input-group";

export default function Page() {
  return (
    <div className="min-h-svh flex-1 p-6">
      <Navbar />
      <Title />
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-secondary-foreground">LISTA</h3>
        <div className="mb-2 flex items-center justify-between gap-4">
          <InputGroup className="rounded-lg">
            <InputGroupInput placeholder="Buscar..." />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>
          <AddProductButton />
        </div>
        <ProductItem />
        <Footer />
      </div>
    </div>
  );
}
