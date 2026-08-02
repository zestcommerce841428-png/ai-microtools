export default function AuthCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-6 px-4 py-24">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">{title}</h1>
        {subtitle && <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">{subtitle}</p>}
      </div>
      <div className="rounded-xl border border-surface-border bg-surface p-6">
        {children}
      </div>
    </div>
  );
}
