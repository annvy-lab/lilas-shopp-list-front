import { Menu } from "lucide-react";
import Image from "next/image";

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
const Navbar = () => {
  return (
    <div className="mb-7 flex w-full items-center justify-between gap-2">
      <Image
        src="/shopp-list-logo.svg"
        alt="logo app"
        height={108}
        width={200}
      />
      <Sheet>
        <SheetTrigger
          render={
            <Button variant={"ghost"} size={"icon-lg"}>
              <Menu />
            </Button>
          }
        />
        <SheetContent className="p-6">
          <SheetTitle>Menu</SheetTitle>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
