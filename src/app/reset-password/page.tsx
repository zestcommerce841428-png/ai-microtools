import type { Metadata } from "next";
import AuthCard from "@/components/AuthCard";
import ResetPasswordForm from "./ResetPasswordForm";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Set New Password",
  description: "Set a new password for your account.",
  alternates: { canonical: `${SITE_URL}/reset-password` },
};

export default function ResetPasswordPage() {
  return (
    <AuthCard title="Set a new password">
      <ResetPasswordForm />
    </AuthCard>
  );
}
