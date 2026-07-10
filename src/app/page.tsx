export default function ExecutivePage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 p-4 md:p-8">
      <section className="rounded-xl border border-os-border bg-os-surface p-8">
        <p className="text-xs font-mono uppercase tracking-widest text-os-brand">
          JasperOS
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Executive Cockpit
        </h1>

        <p className="mt-4 text-os-textMuted">
          Next.js application shell is running successfully.
        </p>
      </section>

      <section className="rounded-xl border border-os-border bg-os-surface p-6">
        <h2 className="mb-4 text-lg font-semibold">
          Theme Verification
        </h2>

        <div className="flex flex-wrap gap-3">
          <div className="rounded-lg bg-os-brand px-4 py-2 font-medium text-black">
            Brand
          </div>

          <div className="rounded-lg bg-os-accent px-4 py-2">
            Accent
          </div>

          <div className="rounded-lg border border-os-border bg-os-bg px-4 py-2">
            Surface
          </div>
        </div>
      </section>
    </main>
  );
}