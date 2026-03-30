import { User } from "./user";


export type GoogleAuthRequest = {
  token: string;
};

export type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signInWithGoogleToken: (token: string) => Promise<User>;
  signOut: () => void;
};