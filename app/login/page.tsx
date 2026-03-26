import Link from "next/link";

import { Button } from "@/app/_components/ui/button";
import { authRoutes } from "@/app/_lib/auth-routes";

const LoginPage = () => {
  return (
    <main className="flex min-h-svh items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-4 rounded-3xl border bg-card p-6 text-card-foreground shadow-sm">
        <h1 className="text-2xl font-bold text-primary">Entrar</h1>
        <p className="text-sm text-muted-foreground">
          Faça login para acessar sua lista. Se o Clerk estiver configurado, o
          botão abaixo envia você para o fluxo de autenticação.
        </p>
        <Button className="w-full" render={<Link href={authRoutes.signIn} />}>
          Continuar com login
        </Button>
      </div>
    </main>
  );
};

export default LoginPage;
