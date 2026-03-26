const FALLBACK_SIGN_IN_PATH = "/login";
const FALLBACK_SIGN_OUT_PATH = "/";

const normalizePath = (value: string | undefined, fallback: string) => {
  if (!value) return fallback;

  return value.startsWith("/") || value.startsWith("http") ? value : fallback;
};

export const authRoutes = {
  signIn: normalizePath(process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL, FALLBACK_SIGN_IN_PATH),
  signOut: normalizePath(
    process.env.NEXT_PUBLIC_CLERK_SIGN_OUT_URL,
    FALLBACK_SIGN_OUT_PATH,
  ),
};
