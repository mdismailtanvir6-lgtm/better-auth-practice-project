"use client";

import { signIn } from "@/lib/auth-client";

export function SignInWithGoogle() {
  const handleGoogleSignIn = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
  };

  return (
    <button
      type="button"
      onClick={handleGoogleSignIn}
      className="btn btn-soft btn-primary"
    >
      Sign in with Google
    </button>
  );
}
