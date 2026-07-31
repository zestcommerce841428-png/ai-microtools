export default function StaticPage({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-4 py-16">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">{title}</h1>
        {subtitle && <p className="mt-2 text-zinc-500 dark:text-zinc-500">{subtitle}</p>}
      </div>
      <div
        className="flex flex-col gap-4 text-zinc-700 dark:text-zinc-300
          [&_h2]:mt-4 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-zinc-900 [&_h2]:dark:text-zinc-50
          [&_a]:font-medium [&_a]:text-zinc-900 [&_a]:underline [&_a]:underline-offset-2 [&_a]:dark:text-zinc-100
          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1"
      >
        {children}
      </div>
    </div>
  );
}
