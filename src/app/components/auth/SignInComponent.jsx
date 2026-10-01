// "use client";
import { SignInForm } from "./SignInForm";

const SignInComponent = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <div className="flex w-full max-w-md flex-col gap-4 rounded-lg border border-gray-500 py-15 px-6 shadow-lg">
        <SignInForm />
      </div>
    </section>
  );
};

export default SignInComponent;
