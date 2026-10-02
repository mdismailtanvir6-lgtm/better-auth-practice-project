import React from "react";
import { SignInWithGoogle } from "./SignInWithGoogle";
import { SignInWithGitHub } from "./SignInWithGitHub";

const SignInWithSocials = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <SignInWithGoogle />
      <SignInWithGitHub />
    </div>
  );
};

export default SignInWithSocials;
