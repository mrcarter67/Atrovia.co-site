export const metadata = {
  title: "About — Atrovia",
  description: "Why Atrovia exists, and what we believe small businesses deserve.",
};

const SECTIONS = [
  {
    h: "The problem we started with",
    p: "Marketing automation, a real CRM, and an ERP that actually fits how small businesses operate — that combination has existed for years. It just hasn't been priced for the businesses that need it most. HubSpot, Salesforce, and NetSuite were built for companies with a budget line item for 'martech stack.' Most small businesses don't have that line item. They have an owner doing the marketing, the quoting, and the books, often after hours.",
  },
  {
    h: "What we believe",
    p: "A 12-person construction company shouldn't need a marketing agency to get a brand voice that sounds like them. A solo real estate investor shouldn't need three different logins to find a deal, quote it, and invoice it. The technology to do this with AI agents instead of a department of people already exists — it just hadn't been put together at a price a small business could actually pay.",
  },
  {
    h: "How we built it",
    p: "Atrovia is two systems under one login. Atrium is the AI marketing team — eight specialists that handle strategy, brand voice, analytics, outreach, content, local SEO, reputation, and intelligence, and that remember every interaction instead of starting over each time. Kova is the operations side — CRM, quoting, invoicing, and (soon) a full ERP, all on one database instead of five disconnected tools.",
  },
  {
    h: "Where we are now",
    p: "We're in beta. That's not a marketing term here — it means the product is live, real businesses are using it, and the roadmap is still being shaped by what beta members tell us. If you join now, your pricing locks in before it changes, and your feedback has a direct line to what we build next.",
  },
];

export default function AboutPage() {
  return (
    <main style={{ background: "#F8FAFC", minHeight: "100%", fontFamily: "system-ui,sans-serif" }}>
      {/* Hero */}
      <div style={{ background: "linear-gradient(135deg,#0F2942,#1E3A5F)", padding: "56px 24px 48px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ fontSize: 11, color: "#3B9EFF", fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 10 }}>
            About Atrovia
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#F1F5F9", lineHeight: 1.25, margin: 0 }}>
            We think enterprise-grade software shouldn't require an enterprise budget.
          </h1>
          <p style={{ fontSize: 15, color: "#94A3B8", marginTop: 14, lineHeight: 1.6, maxWidth: 560 }}>
            Atrovia is the marketing team and the operations platform small businesses
            get priced out of — built as AI-native from day one, not retrofitted.
          </p>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px" }}>
        {SECTIONS.map((s) => (
          <div key={s.h} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#0F172A", marginBottom: 10 }}>{s.h}</h2>
            <p style={{ fontSize: 15, color: "#334155", lineHeight: 1.7, margin: 0 }}>{s.p}</p>
          </div>
        ))}

        <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 10, padding: "20px 22px", marginTop: 8 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#0F172A", marginBottom: 6 }}>
            Based in San Jose, CA
          </div>
          <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6 }}>
            Building for small businesses everywhere — not just where we're headquartered.
          </div>
        </div>

        <a
          href="/beta"
          style={{ display: "inline-block", marginTop: 28, padding: "11px 22px", background: "#3B9EFF", color: "#fff", fontWeight: 700, fontSize: 14, borderRadius: 8, textDecoration: "none" }}
        >
          Join the beta →
        </a>
      </div>
    </main>
  );
}
