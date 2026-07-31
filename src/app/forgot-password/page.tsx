import type { Metadata } from "next";
import AuthCard from "@/components/AuthCard";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Reset your account password.",
  alternates: { canonical: `${SITE_URL}/forgot-password` },
};

export default function ForgotPasswordPage() {
  return (
    <AuthCard title="Reset your password" subtitle="We'll email you a link to set a new one.">
      <ForgotPasswordForm />
    </AuthCard>
  );
}
