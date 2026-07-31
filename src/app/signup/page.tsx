import type { Metadata } from "next";
import Link from "next/link";
import AuthCard from "@/components/AuthCard";
import SignupForm from "./SignupForm";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a free account to save your generation history and get higher daily limits.",
  alternates: { canonical: `${SITE_URL}/signup` },
};

export default function SignupPage() {
  return (
    <AuthCard
      title="Create a free account"
      subtitle="Optional — every tool still works without one."
    >
      <SignupForm />
      <p className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-500">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-zinc-900 hover:underline dark:text-zinc-100">
          Log in
        </Link>
      </p>
    </AuthCard>
  );
}
