import type { Metadata } from "next";
import Link from "next/link";
import AuthCard from "@/components/AuthCard";
import LoginForm from "./LoginForm";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Log In",
  description: "Log in to your account.",
  alternates: { canonical: `${SITE_URL}/login` },
};

export default function LoginPage() {
  return (
    <AuthCard title="Log in">
      <LoginForm />
      <div className="mt-6 flex flex-col items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500">
        <Link href="/forgot-password" className="hover:underline">
          Forgot your password?
        </Link>
        <p>
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-medium text-zinc-900 hover:underline dark:text-zinc-100">
            Sign up
          </Link>
        </p>
      </div>
    </AuthCard>
  );
}
