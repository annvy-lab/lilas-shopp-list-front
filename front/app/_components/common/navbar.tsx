"use client";

import { Cat, Heart, LogOut, Menu } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useAuth } from "@/app/_hooks/use-auth";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";

const Navbar = () => {
  const router = useRouter();
  const { user, signOut } = useAuth();

  const handleLogout = async () => {
    signOut();
    router.replace("/sign-in");
  };

  return (
    <div className="mb-6 flex w-full items-center justify-between gap-2 p-6 pb-0">
      <Image
        src="/shopp-list-logo.svg"
        alt="logo app"
        height={80}
        width={180}
      />

      <Sheet>
        <SheetTrigger
          render={
            <Button variant="ghost" size="icon-lg">
              <Menu />
            </Button>
          }
        />

        <SheetContent className="flex h-full flex-col p-6">
          <div>
            <SheetTitle>Menu</SheetTitle>
            <div className="mt-6 flex flex-col items-center justify-center space-y-2 pb-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={user?.photo || undefined} />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>

              <div className="flex flex-col items-center justify-center">
                <h3 className="line-clamp-1 text-xl font-bold text-primary">
                  {user?.firstName}
                </h3>
                <p className="mt-[-0.1rem] line-clamp-1 text-sm font-light text-foreground/80">
                  {user?.email}
                </p>
              </div>
            </div>

            <div className="mt-6 border-y py-4">
              <div className="flex items-center justify-center gap-2">
                <Cat className="h-4 w-4 text-primary" />
                <h4 className="text-base font-semibold text-primary">
                  Sobre Lila&apos;s Shopp List
                </h4>
                <Heart className="h-4 w-4 text-primary" />
              </div>

              <p className="mt-3 text-justify text-sm leading-6 text-secondary-foreground">
                Organize suas compras de forma prática e rápida. No Lila&apos;s
                Shopp List, você pode montar sua lista, acompanhar os itens
                adicionados e facilitar sua rotina no mercado com controle e
                organização.
              </p>
              <p className="mt-2 text-justify text-xs leading-6 text-foreground/75">
                © 2026 Copyright -{" "}
                <span className="font-bold">Lila&apos;s Shopp List</span>
              </p>
            </div>
          </div>

          <div className="mt-auto pt-6">
            <Button className="w-full" onClick={handleLogout}>
              <LogOut />
              Logout
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
