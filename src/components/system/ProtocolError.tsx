interface Props {
  errors: { path: string; message: string }[];
}

export default function ProtocolError({ errors = [] }: Props) {
  return (
    <section className="flex min-h-[400px] items-center justify-center p-8">
      <div className="w-full max-w-xl space-y-5 rounded-xl border border-red-500/30 bg-red-500/5 p-6">
        <h1 className="text-xl font-bold text-red-400">
          ExecutiveStateProtocol Error
        </h1>

        <p className="text-sm text-slate-300">
          JasperOS cannot load the executive state. The supplied JSON does not
          match ExecutiveStateProtocol v3.0.0.
        </p>

        <div className="space-y-2 font-mono text-xs">
          {errors.map((error) => (
            <div key={error.path} className="rounded bg-black/20 p-3">
              <span className="text-red-300">{error.path}</span>
              <p className="text-slate-400">{error.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
