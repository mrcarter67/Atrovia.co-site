export const metadata = {
  title: "Contact — Atrovia",
  description: "Get in touch with the Atrovia team.",
};

const CHANNELS = [
  { label: "General & sales", value: "hello@atrovia.co", note: "Questions about pricing, the beta, or which tier fits your business." },
  { label: "Support", value: "support@atrovia.co", note: "Already a beta member? This is the fastest way to reach us." },
  { label: "Press & partnerships", value: "press@atrovia.co", note: "Media inquiries, integration partners, agencies." },
];

export default function ContactPage() {
  return (
    <main style={{ background: "#F8FAFC", minHeight: "100%", fontFamily: "system-ui,sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg,#0F2942,#1E3A5F)", padding: "56px 24px 44px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <div style={{ fontSize: 11, color: "#3B9EFF", fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 10 }}>
            Contact
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 700, color: "#F1F5F9", margin: 0 }}>
            We read every message ourselves.
          </h1>
          <p style={{ fontSize: 14, color: "#94A3B8", marginTop: 12 }}>
            No ticket queue, no bot reply first. Beta-stage means a real person on the team sees this.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "40px 24px" }}>
        {CHANNELS.map((c) => (
          <a
            key={c.label}
            href={`mailto:${c.value}`}
            style={{
              display: "block", background: "#fff", border: "1px solid #E2E8F0", borderRadius: 10,
              padding: "16px 18px", marginBottom: 12, textDecoration: "none",
            }}
          >
            <div style={{ fontSize: 11, color: "#64748B", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.4, marginBottom: 4 }}>
              {c.label}
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#3B9EFF", marginBottom: 4 }}>{c.value}</div>
            <div style={{ fontSize: 13, color: "#64748B" }}>{c.note}</div>
          </a>
        ))}

        <div style={{ marginTop: 28, fontSize: 13, color: "#64748B", lineHeight: 1.6 }}>
          Looking for the beta signup instead?{" "}
          <a href="/beta" style={{ color: "#3B9EFF", fontWeight: 600 }}>Claim your spot →</a>
        </div>
      </div>
    </main>
  );
}
