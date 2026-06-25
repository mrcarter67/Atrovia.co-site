import BetaSignupForm from "../../components/BetaSignupForm";

export const metadata = {
  title: "Join the Beta — Atrovia",
  description: "Beta members lock in $99/mo for Atrium or Kova — forever.",
};

const TRUST_ITEMS = [
  { icon: "🔒", h: "Price locked forever", p: "Beta members keep $99/mo pricing even after we raise rates." },
  { icon: "⚡", h: "Live same day", p: "No implementation call. No onboarding fee. You're in the product the minute you sign up." },
  { icon: "🎯", h: "Founding member access", p: "Direct line to the product team. Your feedback shapes the roadmap." },
  { icon: "🤝", h: "White-glove setup", p: "We personally configure your AI agents and CRM for your specific business in week one." },
];

export default function BetaPage() {
  return (
    <main style={{ background: "#F8FAFC", minHeight: "100%", fontFamily: "system-ui,sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg,#0F2942,#1E3A5F)", padding: "52px 20px 40px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", fontSize: 11, fontWeight: 700, color: "#10B981", background: "rgba(16,185,129,0.12)", padding: "4px 10px", borderRadius: 99, marginBottom: 16, letterSpacing: 0.4 }}>
            BETA — LIMITED ACCESS
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#F1F5F9", lineHeight: 1.25, margin: "0 0 14px" }}>
            Be one of the first 3,000 businesses inside Atrovia.
          </h1>
          <p style={{ fontSize: 15, color: "#94A3B8", maxWidth: 560, margin: "0 auto" }}>
            Beta members lock in $99/mo for Atrium or Kova — forever. That's the AI marketing
            department and the CRM + ERP your business has been priced out of, at a fraction
            of what you'd pay anywhere else.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px 64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14, marginBottom: 40 }}>
          {TRUST_ITEMS.map((t) => (
            <div key={t.h} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 18, marginBottom: 6 }}>{t.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#0F172A", marginBottom: 3 }}>{t.h}</div>
              <div style={{ fontSize: 12, color: "#64748B", lineHeight: 1.5 }}>{t.p}</div>
            </div>
          ))}
        </div>

        <BetaSignupForm />

        <p style={{ textAlign: "center", fontSize: 12, color: "#94A3B8", marginTop: 20 }}>
          Already signed up? <a href="/login" style={{ color: "#3B9EFF", fontWeight: 600 }}>Log in</a>
        </p>
      </div>
    </main>
  );
}
