import { GoogleAuthRequest } from "../_types/auth";
import { User } from "../_types/user";
import { apiFetch } from "./api";
import { getUser, removeUser, saveUser } from "./storage";


export async function authenticateWithGoogleToken(
  token: string,
): Promise<User> {
  const body: GoogleAuthRequest = { token };

  const user = await apiFetch<User>("/auth/google", {
    method: "POST",
    body: JSON.stringify(body),
  });

  saveUser(user);

  return user;
}

export function getAuthenticatedUser() {
  return getUser();
}

export function logoutAuthenticatedUser() {
  removeUser();
}