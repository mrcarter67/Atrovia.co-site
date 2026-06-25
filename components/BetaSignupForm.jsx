"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.atrovia.co";

const INDUSTRIES = [
  "Real Estate", "Construction & Contracting", "Healthcare & Medical",
  "Legal & Professional Services", "Retail & E-commerce", "Restaurants & Food Service",
  "Fitness & Wellness", "Marketing & Creative Agency", "Technology & SaaS",
  "Manufacturing", "Home Services", "Finance & Accounting", "Education & Tutoring", "Other",
];

const INDUSTRY_TO_VERTICAL = {
  "Real Estate": "real_estate",
  "Construction & Contracting": "construction",
  "Healthcare & Medical": "healthcare",
  "Legal & Professional Services": "legal",
  "Retail & E-commerce": "retail",
  "Restaurants & Food Service": "restaurants",
  "Fitness & Wellness": "fitness",
  "Marketing & Creative Agency": "marketing_agency",
  "Technology & SaaS": "technology",
  "Manufacturing": "manufacturing",
  "Home Services": "home_services",
  "Finance & Accounting": "finance",
  "Education & Tutoring": "education",
  "Other": "general",
};

const TEAM_SIZES = [
  "Just me (solo)", "2–5 people", "6–15 people", "16–50 people", "51–200 people", "200+ people",
];

const TIERS = [
  { id: "atrium", label: "Atrium", sub: "AI Marketing Team", price: "$99/mo" },
  { id: "kova", label: "Kova", sub: "CRM + ERP", price: "$99/mo" },
  { id: "both", label: "Both", sub: "Full Platform", price: "$198/mo", best: true },
];

const initialForm = {
  tier: "both",
  first_name: "",
  last_name: "",
  email: "",
  company: "",
  industry: "",
  team_size: "",
};

export default function BetaSignupForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [spots, setSpots] = useState({ cap: 3000, taken: null, remaining: null });

  useEffect(() => {
    fetch(`${API_URL}/api/beta-signup/spots-remaining`)
      .then((r) => r.json())
      .then(setSpots)
      .catch(() => {}); // badge just falls back to showing nothing
  }, []);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const payload = {
        ...form,
        vertical: INDUSTRY_TO_VERTICAL[form.industry] || form.industry,
      };
      const res = await fetch(`${API_URL}/api/beta-signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.message || data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      localStorage.setItem("atrovia_token", data.token);
      localStorage.setItem("atrovia_tenant", JSON.stringify(data.tenant));
      setStatus("success");
      window.location.href = data.redirectUrl;
    } catch (err) {
      setErrorMsg("Couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div style={card}>
        <div style={{ fontSize: 32, marginBottom: 10 }}>✓</div>
        <div style={{ fontSize: 18, fontWeight: 700, color: "#0F172A", marginBottom: 6 }}>
          You're in. Redirecting to your account…
        </div>
        <div style={{ fontSize: 13, color: "#64748B" }}>
          Check your email for your login details too — they're saved either way.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={card}>
      <div style={{ fontSize: 12, fontWeight: 700, color: "#3B9EFF", marginBottom: 16, textTransform: "uppercase", letterSpacing: 0.4 }}>
        {spots.remaining != null ? `${spots.remaining.toLocaleString()} of ${spots.cap.toLocaleString()} beta spots remaining` : "Beta pricing — locked forever"}
      </div>

      <div style={{ fontSize: 14, fontWeight: 700, color: "#0F172A", marginBottom: 10 }}>I want to join with</div>
      <div style={{ display: "flex", gap: 8, marginBottom: 22, flexWrap: "wrap" }}>
        {TIERS.map((t) => (
          <button
            type="button"
            key={t.id}
            onClick={() => update("tier", t.id)}
            style={{
              flex: "1 1 140px", textAlign: "left", padding: "12px 14px", borderRadius: 10,
              border: `1.5px solid ${form.tier === t.id ? "#3B9EFF" : "#E2E8F0"}`,
              background: form.tier === t.id ? "#EFF6FF" : "#fff", cursor: "pointer", position: "relative",
            }}
          >
            {t.best && (
              <span style={{ position: "absolute", top: -9, right: 10, fontSize: 9, fontWeight: 700, background: "#10B981", color: "#fff", padding: "2px 6px", borderRadius: 4 }}>
                BEST VALUE
              </span>
            )}
            <div style={{ fontSize: 14, fontWeight: 700, color: "#0F172A" }}>{t.label}</div>
            <div style={{ fontSize: 11, color: "#64748B", marginBottom: 4 }}>{t.sub}</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#3B9EFF" }}>{t.price}</div>
          </button>
        ))}
      </div>

      <div style={grid2}>
        <Field label="First name" value={form.first_name} onChange={(v) => update("first_name", v)} required />
        <Field label="Last name" value={form.last_name} onChange={(v) => update("last_name", v)} required />
      </div>
      <Field label="Work email" type="email" value={form.email} onChange={(v) => update("email", v)} required />
      <Field label="Business name" value={form.company} onChange={(v) => update("company", v)} required />

      <div style={grid2}>
        <SelectField label="Industry" value={form.industry} onChange={(v) => update("industry", v)} options={INDUSTRIES} placeholder="Select your industry…" />
        <SelectField label="Team size" value={form.team_size} onChange={(v) => update("team_size", v)} options={TEAM_SIZES} placeholder="Select team size…" />
      </div>

      {status === "error" && (
        <div style={{ background: "#FEF2F2", border: "1px solid #FCA5A5", color: "#B91C1C", fontSize: 13, padding: "10px 12px", borderRadius: 8, marginBottom: 14 }}>
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        style={{
          width: "100%", padding: "13px 0", borderRadius: 9, border: "none",
          background: status === "submitting" ? "#93C5FD" : "#3B9EFF", color: "#fff",
          fontSize: 15, fontWeight: 700, cursor: status === "submitting" ? "default" : "pointer", marginTop: 4,
        }}
      >
        {status === "submitting" ? "Setting up your account…" : "Claim My Beta Spot →"}
      </button>

      <div style={{ fontSize: 11, color: "#94A3B8", marginTop: 12, lineHeight: 1.6, textAlign: "center" }}>
        No credit card required. No spam. Unsubscribe anytime.<br />
        Your {form.tier === "both" ? "$198" : "$99"}/mo beta price is locked the moment you sign up.
      </div>
    </form>
  );
}

function Field({ label, value, onChange, type = "text", required }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={labelStyle}>{label.toUpperCase()}</label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        style={inputStyle}
      />
    </div>
  );
}

function SelectField({ label, value, onChange, options, placeholder }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={labelStyle}>{label.toUpperCase()}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} required style={inputStyle}>
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

const card = {
  background: "#fff", border: "1px solid #E2E8F0", borderRadius: 14,
  padding: "28px 26px", maxWidth: 460, margin: "0 auto", fontFamily: "system-ui,sans-serif",
};
const grid2 = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 };
const labelStyle = { display: "block", fontSize: 10, fontWeight: 700, color: "#64748B", letterSpacing: 0.4, marginBottom: 5 };
const inputStyle = {
  width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #E2E8F0",
  fontSize: 14, color: "#0F172A", background: "#F8FAFC", boxSizing: "border-box",
};
