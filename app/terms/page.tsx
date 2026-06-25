export const metadata = {
  title: "Terms of Service — Atrovia",
  description: "The terms that govern your use of Atrovia.",
};

export default function TermsPage() {
  return (
    <main style={{ background: "#F8FAFC", minHeight: "100%", fontFamily: "system-ui,sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg,#0F2942,#1E3A5F)", padding: "44px 24px 36px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h1 style={{ fontSize: 26, fontWeight: 700, color: "#F1F5F9", margin: 0 }}>Terms of Service</h1>
          <p style={{ fontSize: 13, color: "#94A3B8", marginTop: 8 }}>Last updated: [add date before publishing]</p>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 24px 56px" }}>

        <div style={{ background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: 8, padding: "14px 16px", marginBottom: 28, fontSize: 13, color: "#92400E", lineHeight: 1.6 }}>
          <strong>Before this goes live:</strong> this is a standard SaaS terms template, not legal advice.
          Have a lawyer review it — particularly the liability limits, the beta-program language, and
          payment terms — before publishing or taking payment.
        </div>

        {[
          {
            h: "1. Acceptance of terms",
            body: <p style={p}>By creating an account or using Atrovia, you agree to these Terms. If you're using Atrovia on behalf of a business, you're agreeing on that business's behalf and confirming you have the authority to do so.</p>,
          },
          {
            h: "2. The beta program",
            body: (
              <ul style={ul}>
                <li>Atrovia is currently in beta. Features may change, and some functionality may be incomplete or unstable as we build it out.</li>
                <li>Beta members who sign up at the advertised rate keep that rate for as long as their subscription stays active, even after pricing changes for new customers.</li>
                <li>We may ask beta members for feedback and may use that feedback to shape the product roadmap, without compensation owed for the feedback itself.</li>
              </ul>
            ),
          },
          {
            h: "3. Your account",
            body: <p style={p}>You're responsible for keeping your login credentials secure and for activity that happens under your account. Tell us right away if you suspect unauthorized access.</p>,
          },
          {
            h: "4. Subscription and billing",
            body: (
              <ul style={ul}>
                <li>Subscriptions bill monthly at the rate shown at signup, until canceled.</li>
                <li>You can cancel anytime; cancellation takes effect at the end of the current billing period.</li>
                <li>[Add your actual refund policy here before publishing.]</li>
              </ul>
            ),
          },
          {
            h: "5. AI-generated content",
            body: (
              <p style={p}>
                Atrium and Kova use AI agents to draft marketing content, quotes, estimates, invoices, and
                business intelligence reports. AI output is a starting point, not a guarantee of accuracy —
                review AI-generated content (especially pricing, legal, or financial documents) before sending
                it to your customers. You're responsible for what you ultimately send or publish under your
                business's name.
              </p>
            ),
          },
          {
            h: "6. Your data and content",
            body: <p style={p}>You retain ownership of the business data, contacts, and content you put into Atrovia. You grant us a license to host, process, and display that data solely to provide the service to you. See our <a href="/privacy" style={a}>Privacy Policy</a> for details on how we handle it.</p>,
          },
          {
            h: "7. Acceptable use",
            body: (
              <p style={p}>
                Don't use Atrovia to send spam, violate applicable law, infringe others' rights, or attempt
                to access another tenant's data or reverse-engineer the platform. We may suspend accounts
                that violate this.
              </p>
            ),
          },
          {
            h: "8. Service availability",
            body: <p style={p}>We aim for reliable uptime but don't guarantee uninterrupted service, particularly during the beta period while we're actively shipping changes.</p>,
          },
          {
            h: "9. Limitation of liability",
            body: <p style={p}>To the fullest extent permitted by law, Atrovia isn't liable for indirect, incidental, or consequential damages arising from your use of the service. [This section in particular should be finalized with legal counsel based on your jurisdiction.]</p>,
          },
          {
            h: "10. Termination",
            body: <p style={p}>You can close your account anytime. We may suspend or terminate accounts that violate these Terms, with notice where reasonably possible.</p>,
          },
          {
            h: "11. Changes to these terms",
            body: <p style={p}>We'll notify active accounts by email before material changes take effect.</p>,
          },
          {
            h: "12. Contact",
            body: <p style={p}>Questions about these Terms: <a href="mailto:hello@atrovia.co" style={a}>hello@atrovia.co</a></p>,
          },
        ].map((s) => (
          <div key={s.h} style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: 17, fontWeight: 700, color: "#0F172A", marginBottom: 8 }}>{s.h}</h2>
            {s.body}
          </div>
        ))}
      </div>
    </main>
  );
}

const p: React.CSSProperties = { fontSize: 14, color: "#334155", lineHeight: 1.7, margin: "0 0 8px" };
const ul: React.CSSProperties = { fontSize: 14, color: "#334155", lineHeight: 1.7, paddingLeft: 20, margin: 0 };
const a: React.CSSProperties = { color: "#3B9EFF", fontWeight: 600, textDecoration: "none" };
