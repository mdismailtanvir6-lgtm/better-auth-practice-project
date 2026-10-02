"use client";

import { signIn } from "@/lib/auth-client";

export function SignInWithGitHub() {
  const handleGitHubSignIn = async () => {
    await signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
    });
  };

  return (
    <button
      type="button"
      onClick={handleGitHubSignIn}
      className="btn btn-soft btn-primary"
    >
      Sign in with GitHub
    </button>
  );
}
