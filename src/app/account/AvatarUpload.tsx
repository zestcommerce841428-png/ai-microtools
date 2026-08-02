"use client";

import { useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";

const MAX_BYTES = 3 * 1024 * 1024;
const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/webp", "image/gif"];

function initials(email: string) {
  return email.slice(0, 2).toUpperCase();
}

export default function AvatarUpload({
  userId,
  email,
  initialAvatarUrl,
}: {
  userId: string;
  email: string;
  initialAvatarUrl: string | null;
}) {
  const [avatarUrl, setAvatarUrl] = useState(initialAvatarUrl);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    setError(null);

    if (!ALLOWED_TYPES.includes(file.type)) {
      setError("Please choose a PNG, JPEG, WebP, or GIF image.");
      return;
    }
    if (file.size > MAX_BYTES) {
      setError("Image must be under 3MB.");
      return;
    }

    setBusy(true);
    const supabase = createClient();
    const path = `${userId}/avatar`;

    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(path, file, { upsert: true, contentType: file.type });

    if (uploadError) {
      setBusy(false);
      setError(uploadError.message);
      return;
    }

    const { data: publicUrlData } = supabase.storage.from("avatars").getPublicUrl(path);
    const bustedUrl = `${publicUrlData.publicUrl}?v=${Date.now()}`;

    const { error: updateError } = await supabase.auth.updateUser({ data: { avatar_url: bustedUrl } });

    setBusy(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setAvatarUrl(bustedUrl);
  }

  async function handleRemove() {
    setBusy(true);
    setError(null);

    const supabase = createClient();
    const path = `${userId}/avatar`;

    await supabase.storage.from("avatars").remove([path]);
    const { error: updateError } = await supabase.auth.updateUser({ data: { avatar_url: null } });

    setBusy(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setAvatarUrl(null);
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-surface-border bg-primary text-lg font-semibold text-primary-content">
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- user-uploaded, arbitrary remote-origin image
          <img src={avatarUrl} alt="" className="h-full w-full object-cover" />
        ) : (
          initials(email)
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={busy}
            className="text-sm font-medium underline disabled:opacity-50"
          >
            {busy ? "Working..." : avatarUrl ? "Change photo" : "Upload photo"}
          </button>
          {avatarUrl && (
            <button
              type="button"
              onClick={handleRemove}
              disabled={busy}
              className="text-sm font-medium text-red-600 hover:underline disabled:opacity-50 dark:text-red-400"
            >
              Remove
            </button>
          )}
        </div>
        <p className="text-xs text-zinc-500 dark:text-zinc-500">PNG, JPEG, WebP, or GIF. Up to 3MB.</p>
        {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
