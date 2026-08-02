import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase/serverAuth";
import AccountActions from "./AccountActions";
import ChangePasswordForm from "./ChangePasswordForm";
import TotpMfaSection from "./TotpMfaSection";
import PasskeySection from "./PasskeySection";
import TrustedDevicesSection from "./TrustedDevicesSection";
import AvatarUpload from "./AvatarUpload";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Your Account",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/account` },
};

interface SavedGeneration {
  id: number;
  tool_slug: string;
  tool_name: string;
  output_json: string[];
  created_at: string;
}

export default async function AccountPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: history } = await supabase
    .from("saved_generations")
    .select("id, tool_slug, tool_name, output_json, created_at")
    .order("created_at", { ascending: false })
    .limit(20)
    .returns<SavedGeneration[]>();

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-4 py-16">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Your Account</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">{user.email}</p>
      </div>

      <section className="rounded-xl border border-surface-border bg-surface p-6">
        <AvatarUpload
          userId={user.id}
          email={user.email ?? ""}
          initialAvatarUrl={typeof user.user_metadata?.avatar_url === "string" ? user.user_metadata.avatar_url : null}
        />
      </section>

      <section className="rounded-xl border border-surface-border bg-surface p-6">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Perks of being signed in</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-700 dark:text-zinc-300">
          <li>A higher daily generation limit per tool than anonymous visitors</li>
          <li>Your last 20 generations saved here automatically</li>
        </ul>
      </section>

      <section className="rounded-xl border border-surface-border bg-surface p-6">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Recent generations</h2>
        {!history || history.length === 0 ? (
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-500">
            Nothing yet —{" "}
            <Link href="/tools" className="underline">
              generate something
            </Link>{" "}
            and it&apos;ll show up here.
          </p>
        ) : (
          <div className="mt-3 flex flex-col gap-3">
            {history.map((item) => (
              <div
                key={item.id}
                className="rounded-lg border border-surface-border p-3 text-sm"
              >
                <div className="flex items-center justify-between gap-2">
                  <Link href={`/tools/${item.tool_slug}`} className="font-medium hover:underline">
                    {item.tool_name}
                  </Link>
                  <span className="text-xs text-zinc-500">
                    {new Date(item.created_at).toLocaleDateString()}
                  </span>
                </div>
                <p className="mt-1 truncate text-zinc-600 dark:text-zinc-400">
                  {Array.isArray(item.output_json) ? item.output_json[0] : ""}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="rounded-xl border border-surface-border bg-surface p-6">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Account</h2>
        <div className="mt-3 flex flex-col gap-4">
          <ChangePasswordForm />
          <div className="border-t border-surface-border pt-4">
            <TotpMfaSection />
          </div>
          <div className="border-t border-surface-border pt-4">
            <PasskeySection />
          </div>
          <div className="border-t border-surface-border pt-4">
            <TrustedDevicesSection />
          </div>
          <AccountActions />
        </div>
      </section>
    </div>
  );
}
