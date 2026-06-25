export const metadata = {
  title: "Privacy Policy — Atrovia",
  description: "How Atrovia collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <main style={{ background: "#F8FAFC", minHeight: "100%", fontFamily: "system-ui,sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg,#0F2942,#1E3A5F)", padding: "44px 24px 36px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h1 style={{ fontSize: 26, fontWeight: 700, color: "#F1F5F9", margin: 0 }}>Privacy Policy</h1>
          <p style={{ fontSize: 13, color: "#94A3B8", marginTop: 8 }}>Last updated: [add date before publishing]</p>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 24px 56px" }}>

        <div style={{ background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: 8, padding: "14px 16px", marginBottom: 28, fontSize: 13, color: "#92400E", lineHeight: 1.6 }}>
          <strong>Before this goes live:</strong> this is a standard SaaS privacy policy template,
          not legal advice. Have a lawyer review and tailor it — especially the sections on
          data retention, AI processing, and any state/country-specific rights (e.g. CCPA, GDPR)
          that apply to where your customers are based — before publishing.
        </div>

        {[
          {
            h: "1. What we collect",
            body: (
              <>
                <p style={p}>When you join the beta or use Atrovia, we collect:</p>
                <ul style={ul}>
                  <li><strong>Account information</strong> you provide directly: name, work email, business name, industry, and team size from the beta signup form.</li>
                  <li><strong>Business data you upload or connect</strong>: contacts, deals, quotes, invoices, and any content you create using Atrium or Kova. This belongs to you — see Section 3.</li>
                  <li><strong>Usage data</strong>: pages visited, features used, and basic device/browser information, collected automatically to keep the product working and improve it.</li>
                  <li><strong>Communications</strong>: anything you send us via email or support channels.</li>
                </ul>
              </>
            ),
          },
          {
            h: "2. How we use it",
            body: (
              <ul style={ul}>
                <li>To provide and operate the product — your account, your CRM data, your AI agents.</li>
                <li>To personalize Atrium's agents (brand voice, recommendations, briefings) to your specific business.</li>
                <li>To communicate with you about your account, the beta program, and pricing changes.</li>
                <li>To improve Atrovia — aggregated, de-identified usage patterns only, never your underlying business records.</li>
              </ul>
            ),
          },
          {
            h: "3. Your data stays yours",
            body: (
              <p style={p}>
                Contacts, deals, quotes, and other records you create or upload belong to you.
                We don't sell your business data, and we don't use your tenant's specific records
                to train models shared across other customers. Each tenant's data is isolated —
                see our <a href="/security" style={a}>Security page</a> for how that works technically.
              </p>
            ),
          },
          {
            h: "4. AI processing",
            body: (
              <p style={p}>
                Atrium and Kova's agent features send relevant context (your prompts, business records
                you're working with) to AI providers to generate responses, quotes, scoring, and reports.
                This processing happens to deliver the feature you're using, in real time — it is not used
                to build a profile of you for advertising.
              </p>
            ),
          },
          {
            h: "5. Who we share data with",
            body: (
              <ul style={ul}>
                <li><strong>Service providers</strong> who help run the platform — hosting, email delivery, AI model providers, error monitoring — bound by their own confidentiality and data protection terms.</li>
                <li><strong>Legal requirements</strong> — if required by law, subpoena, or to protect the safety of our users.</li>
                <li>We do <strong>not</strong> sell personal information or business data to third parties.</li>
              </ul>
            ),
          },
          {
            h: "6. Data retention",
            body: (
              <p style={p}>
                We keep your account and business data for as long as your account is active.
                If you close your account, we'll delete or anonymize your data within
                [add your actual retention window] days, except where we're required to keep
                records longer for legal or accounting reasons.
              </p>
            ),
          },
          {
            h: "7. Your rights",
            body: (
              <p style={p}>
                You can request a copy of your data, ask us to correct it, or ask us to delete it,
                by emailing <a href="mailto:hello@atrovia.co" style={a}>hello@atrovia.co</a>. Depending
                on where you're located, you may have additional rights under laws like the CCPA or GDPR —
                we'll honor those requests according to applicable law.
              </p>
            ),
          },
          {
            h: "8. Changes to this policy",
            body: (
              <p style={p}>
                If we make material changes to this policy, we'll notify active accounts by email
                before the changes take effect.
              </p>
            ),
          },
          {
            h: "9. Contact",
            body: (
              <p style={p}>
                Questions about this policy: <a href="mailto:hello@atrovia.co" style={a}>hello@atrovia.co</a>
              </p>
            ),
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
