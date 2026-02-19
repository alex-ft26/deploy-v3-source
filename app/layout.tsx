import type { Metadata } from "next";
import "./globals.css";
import { loadProspectData } from "@/lib/prospect-data";
import { generateTheme, themeToCSS } from "@/lib/theme";
import { getFontsForIndustry } from "@/lib/fonts";
import { ClientNav } from "@/components/ClientNav";

const data = loadProspectData();
const theme = generateTheme(data.brand, data.config.dark_mode);
const fonts = getFontsForIndustry(data.config.industry);

export const metadata: Metadata = {
  title: `${data.content.company_name} — ${data.content.tagline_enhanced}`,
  description: data.content.meta_description || data.content.value_prop,
  icons: data.brand.favicon_url ? [{ url: data.brand.favicon_url }] : undefined,
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cssVars = themeToCSS(theme);

  return (
    <html lang="en" className={`${fonts.heading} ${fonts.body}`}>
      <body style={cssVars as React.CSSProperties}>
        <ClientNav
          items={navItems}
          logo={data.brand.logo_url}
          companyName={data.content.company_name}
        />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-muted)] py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-lg font-semibold text-[var(--color-foreground)]">
              {data.content.company_name}
            </h3>
            <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
              {data.content.tagline}
            </p>
          </div>
          <div>
            <h4 className="font-medium text-[var(--color-foreground)]">Quick Links</h4>
            <ul className="mt-2 space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-[var(--color-foreground)]">Contact</h4>
            <div className="mt-2 space-y-1 text-sm text-[var(--color-muted-foreground)]">
              {data.content.phone && <p>{data.content.phone}</p>}
              {data.content.email && <p>{data.content.email}</p>}
              {data.content.address && <p>{data.content.address}</p>}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-[var(--color-border)] pt-6 text-center text-xs text-[var(--color-muted-foreground)]">
          &copy; {new Date().getFullYear()} {data.content.company_name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
