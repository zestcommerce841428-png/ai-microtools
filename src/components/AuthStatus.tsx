"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function AuthStatus() {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getSession().then(({ data }) => {
      setLoggedIn(Boolean(data.session));
      const metaAvatar = data.session?.user.user_metadata?.avatar_url;
      setAvatarUrl(typeof metaAvatar === "string" ? metaAvatar : null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setLoggedIn(Boolean(session));
      const metaAvatar = session?.user.user_metadata?.avatar_url;
      setAvatarUrl(typeof metaAvatar === "string" ? metaAvatar : null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loggedIn === null) {
    return <span className="h-5 w-16" aria-hidden="true" />;
  }

  if (loggedIn) {
    return (
      <Link
        href="/account"
        className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 hover:text-primary dark:text-zinc-400"
      >
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- user-uploaded, arbitrary remote-origin image
          <img src={avatarUrl} alt="" className="h-6 w-6 rounded-full object-cover" />
        ) : null}
        Account
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Link
        href="/login"
        className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        Log in
      </Link>
      <Link
        href="/signup"
        className="rounded-full bg-primary px-3 py-1.5 text-sm font-medium text-primary-content hover:bg-primary-hover"
      >
        Sign up
      </Link>
    </div>
  );
}
