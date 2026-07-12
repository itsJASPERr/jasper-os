import type { ExecutiveNotification } from "@/types/executive-state";

interface Props {
  notifications: ExecutiveNotification[];
}

const typeClasses: Record<string, string> = {
  Information: "border-sky-500/20 bg-sky-500/10 text-sky-400",
  Warning: "border-amber-500/20 bg-amber-500/10 text-amber-400",
  Critical: "border-rose-500/20 bg-rose-500/10 text-rose-400",
  Success: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  Update: "border-sky-500/20 bg-sky-500/10 text-sky-400",
};

export default function ExecutiveNotifications({ notifications = [] }: Props) {
  return (
    <section className="space-y-5">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-os-brand">
          Notifications
        </p>
        <h2 className="mt-2 text-xl font-bold text-white">
          Executive Signals
        </h2>
      </div>

      {notifications.length === 0 ? (
        <div className="rounded-xl border border-os-border bg-os-surface p-5">
          <p className="text-sm italic text-os-textMuted">
            No active notifications.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {notifications.map((notification) => (
            <article
              key={notification.message}
              className={`rounded-xl border p-4 ${
                typeClasses[notification.type] ??
                "border-os-border bg-os-surface text-slate-300"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-current" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest">
                    {notification.type}
                  </p>
                  <p className="mt-1 text-sm">{notification.message}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
