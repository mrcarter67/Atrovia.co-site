export const metadata = {
  title: "Atrovia — AI Marketing + Operations for Small Business",
  description:
    "Atrium is your AI marketing team. Kova is your CRM and ERP. One login, one price small businesses can actually pay.",
};

const PRODUCTS = [
  {
    name: "Atrium",
    tagline: "Your AI Marketing Team",
    color: "#A78BFA",
    description:
      "Eight AI specialists — strategy, brand voice, analytics, outreach, content, local SEO, reputation, and intelligence. They remember every interaction instead of starting over each time.",
    features: [
      "AI brand voice trained on your business",
      "Automated outreach and follow-ups",
      "Local SEO and reputation management",
      "Marketing analytics and weekly briefings",
    ],
  },
  {
    name: "Kova",
    tagline: "CRM + ERP in One",
    color: "#3B9EFF",
    description:
      "CRM, quoting, invoicing, and a full ERP — all on one database instead of five disconnected tools. Find a deal, quote it, and invoice it without switching tabs.",
    features: [
      "AI-assisted CRM and pipeline management",
      "Quoting and invoicing with auto-trigger",
      "Contact and deal tracking",
      "Business intelligence reports",
    ],
  },
];

const TRUST = [
  { icon: "🔒", h: "Beta price locked forever", p: "$99/mo per product, locked the moment you sign up — even after rates go up." },
  { icon: "⚡", h: "Live same day", p: "No implementation call. No onboarding fee. You're in the product the moment you sign up." },
  { icon: "🎯", h: "Founding member access", p: "Direct line to the product team. Your feedback shapes what we build next." },
  { icon: "🤝", h: "White-glove setup", p: "We personally configure your AI agents and CRM for your specific business in week one." },
];

export default function HomePage() {
  return (
    <main style={{ background: "#F8FAFC", fontFamily: "system-ui, sans-serif" }}>
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #0F2942, #1E3A5F)",
          padding: "80px 24px 72px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 700,
              color: "#10B981",
              background: "rgba(16,185,129,0.12)",
              padding: "4px 12px",
              borderRadius: 99,
              marginBottom: 20,
              letterSpacing: 0.4,
            }}
          >
            BETA — LIMITED ACCESS · 3,000 SPOTS
          </div>
          <h1
            style={{
              fontSize: 42,
              fontWeight: 800,
              color: "#F1F5F9",
              lineHeight: 1.2,
              margin: "0 0 18px",
              letterSpacing: -0.5,
            }}
          >
            Enterprise software.<br />
            Small business price.
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "#94A3B8",
              maxWidth: 560,
              margin: "0 auto 32px",
              lineHeight: 1.65,
            }}
          >
            Atrium is your AI marketing team. Kova is your CRM and ERP.
            One login, one database — at a price a 10-person business can actually pay.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/beta"
              style={{
                padding: "14px 28px",
                background: "#3B9EFF",
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                borderRadius: 9,
                textDecoration: "none",
              }}
            >
              Claim My Beta Spot →
            </a>
            <a
              href="/about"
              style={{
                padding: "14px 28px",
                background: "rgba(255,255,255,0.08)",
                color: "#F1F5F9",
                fontWeight: 600,
                fontSize: 15,
                borderRadius: 9,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Learn more
            </a>
          </div>
          <p style={{ fontSize: 12, color: "#475569", marginTop: 16 }}>
            No credit card required · $99/mo per product · Price locked forever
          </p>
        </div>
      </div>

      {/* Products */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div
            style={{
              fontSize: 11,
              color: "#64748B",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 0.5,
              marginBottom: 10,
            }}
          >
            Two products. One platform.
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0F172A", margin: 0 }}>
            Everything a small business needs. Nothing it doesn't.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {PRODUCTS.map((p) => (
            <div
              key={p.name}
              style={{
                background: "#fff",
                border: "1px solid #E2E8F0",
                borderRadius: 14,
                padding: "28px 26px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  fontSize: 11,
                  fontWeight: 700,
                  color: p.color,
                  background: `${p.color}18`,
                  padding: "3px 10px",
                  borderRadius: 99,
                  marginBottom: 12,
                  letterSpacing: 0.4,
                }}
              >
                {p.tagline.toUpperCase()}
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#0F172A", margin: "0 0 10px" }}>{p.name}</h3>
              <p style={{ fontSize: 14, color: "#64748B", lineHeight: 1.65, margin: "0 0 20px" }}>{p.description}</p>
              <ul style={{ paddingLeft: 0, listStyle: "none", margin: 0 }}>
                {p.features.map((f) => (
                  <li key={f} style={{ fontSize: 13, color: "#334155", padding: "5px 0", display: "flex", gap: 8 }}>
                    <span style={{ color: "#10B981", fontWeight: 700 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 22, fontSize: 22, fontWeight: 800, color: p.color }}>
                $99<span style={{ fontSize: 13, fontWeight: 500, color: "#94A3B8" }}>/mo beta price</span>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, #0F2942, #1E3A5F)",
            borderRadius: 14,
            padding: "24px 26px",
            marginTop: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#F1F5F9", marginBottom: 4 }}>
              Both products together
            </div>
            <div style={{ fontSize: 13, color: "#94A3B8" }}>
              Full platform — Atrium + Kova under one login
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ fontSize: 26, fontWeight: 800, color: "#3B9EFF" }}>
              $198<span style={{ fontSize: 13, fontWeight: 500, color: "#64748B" }}>/mo</span>
            </div>
            <a
              href="/beta"
              style={{
                padding: "11px 22px",
                background: "#3B9EFF",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                borderRadius: 8,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Get both →
            </a>
          </div>
        </div>
      </div>

      {/* Trust signals */}
      <div style={{ background: "#fff", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "56px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#0F172A", margin: 0 }}>
              Why join the beta?
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {TRUST.map((t) => (
              <div key={t.h} style={{ padding: "18px 20px", background: "#F8FAFC", borderRadius: 10, border: "1px solid #E2E8F0" }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>{t.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#0F172A", marginBottom: 5 }}>{t.h}</div>
                <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.55 }}>{t.p}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", padding: "72px 24px" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0F172A", margin: "0 0 14px" }}>
            Ready to get off the waitlist?
          </h2>
          <p style={{ fontSize: 15, color: "#64748B", margin: "0 0 28px", lineHeight: 1.6 }}>
            Beta spots are capped at 3,000. Lock in your price before we raise rates.
          </p>
          <a
            href="/beta"
            style={{
              display: "inline-block",
              padding: "14px 32px",
              background: "#3B9EFF",
              color: "#fff",
              fontWeight: 700,
              fontSize: 16,
              borderRadius: 9,
              textDecoration: "none",
            }}
          >
            Claim My Beta Spot →
          </a>
          <p style={{ fontSize: 12, color: "#94A3B8", marginTop: 14 }}>
            No credit card required. Price locked forever.
          </p>
        </div>
      </div>
    </main>
  );
}
