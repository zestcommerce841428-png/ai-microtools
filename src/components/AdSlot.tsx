export default function AdSlot({ label = "Advertisement" }: { label?: string }) {
  return (
    <div className="flex w-full max-w-2xl items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-zinc-50 py-6 text-xs uppercase tracking-wide text-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-600">
      {label} slot — wire up AdSense here
    </div>
  );
}
