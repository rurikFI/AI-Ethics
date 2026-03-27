import { Suspense } from "react";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-md px-6 py-16">Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}