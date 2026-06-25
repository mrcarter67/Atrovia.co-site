export const metadata = {
  title: "Careers — Atrovia",
  description: "Join the team building Atrovia.",
};

export default function CareersPage() {
  return (
    <main style={{ background: "#F8FAFC", minHeight: "100%", fontFamily: "system-ui,sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg,#0F2942,#1E3A5F)", padding: "56px 24px 44px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <div style={{ fontSize: 11, color: "#3B9EFF", fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 10 }}>
            Careers
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 700, color: "#F1F5F9", margin: 0 }}>
            We're small right now. That's deliberate.
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "40px 24px" }}>
        <p style={{ fontSize: 15, color: "#334155", lineHeight: 1.7 }}>
          We don't have open roles posted right now. We're heads-down getting Atrium and Kova
          through beta with the team already in place. That changes as the platform grows —
          and when it does, the roles that open will show up here first.
        </p>
        <p style={{ fontSize: 15, color: "#334155", lineHeight: 1.7 }}>
          If you think you'd be a strong fit for what we're building — engineering, AI, design,
          or go-to-market — send a note anyway. We keep good people in mind for what's next.
        </p>

        <a
          href="mailto:careers@atrovia.co"
          style={{ display: "inline-block", marginTop: 16, padding: "11px 22px", background: "#0F172A", color: "#fff", fontWeight: 700, fontSize: 14, borderRadius: 8, textDecoration: "none" }}
        >
          careers@atrovia.co
        </a>
      </div>
    </main>
  );
}
