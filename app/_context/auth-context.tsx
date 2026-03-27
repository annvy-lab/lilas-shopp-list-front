"use client";

import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { User } from "../_types/user";
import { AuthContextType } from "../_types/auth";
import { authenticateWithGoogleToken, getAuthenticatedUser, logoutAuthenticatedUser } from "../_lib/auth";


export const AuthContext = createContext<AuthContextType | null>(null);

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = getAuthenticatedUser();
    setUser(storedUser);
    setIsLoading(false);
  }, []);

  const value = useMemo<AuthContextType>(
    () => ({
      user,
      isAuthenticated: !!user,
      isLoading,
      signInWithGoogleToken: async (token: string) => {
        const authenticatedUser = await authenticateWithGoogleToken(token);
        setUser(authenticatedUser);
        return authenticatedUser;
      },
      signOut: () => {
        logoutAuthenticatedUser();
        setUser(null);
      },
    }),
    [user, isLoading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}