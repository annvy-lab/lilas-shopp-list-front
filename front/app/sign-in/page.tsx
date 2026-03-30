"use client";

import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { useAuth } from "../_hooks/use-auth";
import { Card, CardContent, CardTitle } from "../_components/ui/card";

export default function SignInPage() {
  const router = useRouter();
  const { signInWithGoogleToken } = useAuth();

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <Card className="w-fit">
        <CardContent className="w-fit">
          <CardTitle className="flex w-full flex-col items-center justify-center gap-4">
            <Image
              src="/shopp-list-logo.svg"
              alt="logo app"
              height={68}
              width={160}
            />
            <div className="flex w-full flex-col items-start justify-start">
              <h1 className="text-2xl font-semibold">Entrar</h1>
              <p className="text-sm text-secondary-foreground">
                Faça login com sua conta Google <br /> para acessar o sistema!
              </p>
            </div>
          </CardTitle>

          <div className="mt-6 mb-2 flex justify-center">
            <GoogleLogin
              useOneTap={false}
              auto_select={false}
              onSuccess={async (credentialResponse) => {
                const token = credentialResponse.credential;

                if (!token) {
                  throw new Error("Token do Google não recebido.");
                }

                await signInWithGoogleToken(token);
                router.replace("/");
              }}
              onError={() => {
                console.error("Falha no login com Google");
              }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
