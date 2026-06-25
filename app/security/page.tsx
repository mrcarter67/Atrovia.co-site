export const metadata = {
  title: "Security — Atrovia",
  description: "How Atrovia protects your business data.",
};

const PILLARS = [
  {
    h: "Tenant isolation by design",
    p: "Every business on Atrovia runs in its own isolated tenant. Every database query is scoped to your tenant ID at the data layer — not just filtered in the application — so one customer's contacts, deals, and documents are never reachable from another's account.",
  },
  {
    h: "Encrypted in transit",
    p: "All traffic to Atrovia — the app, the API, the AI agents — runs over HTTPS/TLS. Nothing moves between your browser and our servers unencrypted.",
  },
  {
    h: "Authenticated, every request",
    p: "Every API call is verified against a signed token tied to your account and tenant before any data is read or written. There's no endpoint that trusts a request just because it arrived.",
  },
  {
    h: "Your data trains your business, not our models",
    p: "Atrium's agents use your business context — brand voice, past conversations, your numbers — to give you better answers. That context is stored per-tenant and used to serve your account. It is not pooled across customers to train shared models.",
  },
  {
    h: "Monitoring and backups",
    p: "Production errors are tracked in real time so issues get caught before they become a pattern. Databases are backed up on a regular automated schedule with tested restore procedures, not just a cron job we hope works.",
  },
];

export default function SecurityPage() {
  return (
    <main style={{ background: "#F8FAFC", minHeight: "100%", fontFamily: "system-ui,sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg,#0F2942,#1E3A5F)", padding: "56px 24px 44px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ fontSize: 11, color: "#3B9EFF", fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 10 }}>
            Security
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 700, color: "#F1F5F9", margin: 0 }}>
            Built isolated from day one — not bolted on later.
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px" }}>
        {PILLARS.map((s) => (
          <div key={s.h} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 10, padding: "18px 20px", marginBottom: 12 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#0F172A", marginBottom: 6 }}>{s.h}</h2>
            <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65, margin: 0 }}>{s.p}</p>
          </div>
        ))}

        <p style={{ fontSize: 13, color: "#94A3B8", marginTop: 24, lineHeight: 1.6 }}>
          Have a specific security question — vendor review, compliance questionnaire,
          penetration test request? Email{" "}
          <a href="mailto:security@atrovia.co" style={{ color: "#3B9EFF", fontWeight: 600 }}>security@atrovia.co</a> and we'll get back to you directly.
        </p>
      </div>
    </main>
  );
}
