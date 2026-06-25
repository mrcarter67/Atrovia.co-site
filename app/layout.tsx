import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atrovia — AI Marketing + Operations for Small Business",
  description:
    "Atrovia brings enterprise-grade AI marketing (Atrium) and operations (Kova) to small businesses at a price they can actually pay.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: "system-ui, sans-serif" }}>
        <header
          style={{
            background: "#0F2942",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 56,
            position: "sticky",
            top: 0,
            zIndex: 100,
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 18, fontWeight: 800, color: "#F1F5F9", letterSpacing: -0.3 }}>Atrovia</span>
          </a>

          <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <a
              href="/beta"
              style={{
                marginLeft: 8,
                padding: "7px 16px",
                background: "#3B9EFF",
                color: "#fff",
                fontWeight: 700,
                fontSize: 13,
                borderRadius: 7,
                textDecoration: "none",
              }}
            >
              Join Beta
            </a>
          </nav>
        </header>

        <div style={{ minHeight: "calc(100vh - 56px - 200px)" }}>{children}</div>

        <footer
          style={{
            background: "#0F172A",
            padding: "40px 24px",
            marginTop: 0,
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: 32,
                marginBottom: 36,
              }}
            >
              <div>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#F1F5F9", marginBottom: 10 }}>Atrovia</div>
                <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6 }}>
                  AI marketing and operations for small businesses.
                </div>
              </div>
              <div>
                <div style={footerHeading}>Product</div>
                <FooterLink href="/beta">Join Beta</FooterLink>
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
                <FooterLink href="/careers">Careers</FooterLink>
              </div>
              <div>
                <div style={footerHeading}>Legal</div>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
                <FooterLink href="/terms">Terms of Service</FooterLink>
                <FooterLink href="/security">Security</FooterLink>
              </div>
            </div>
            <div
              style={{
                borderTop: "1px solid #1E293B",
                paddingTop: 20,
                fontSize: 12,
                color: "#475569",
              }}
            >
              © {new Date().getFullYear()} Atrovia. All rights reserved. · San Jose, CA
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{
        padding: "6px 12px",
        fontSize: 13,
        color: "#94A3B8",
        textDecoration: "none",
        borderRadius: 6,
        fontWeight: 500,
      }}
    >
      {children}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{ display: "block", fontSize: 13, color: "#64748B", textDecoration: "none", marginBottom: 6 }}
    >
      {children}
    </a>
  );
}

const footerHeading: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: "#94A3B8",
  textTransform: "uppercase",
  letterSpacing: 0.5,
  marginBottom: 12,
};
