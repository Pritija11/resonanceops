import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const SITE_URL = "https://resonanceops.ltd";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ResonanceOps — AI Model Monitoring & Observability",
    template: "%s · ResonanceOps",
  },
  description:
    "ResonanceOps is an early-stage AI infrastructure startup based in Lalitpur, Nepal, offering model monitoring, drift detection, evaluation, and alerting for teams running machine learning and LLM systems in production.",
  keywords: [
    "ResonanceOps",
    "AI model monitoring",
    "model observability",
    "data drift detection",
    "LLM evaluation",
    "ML monitoring startup",
    "AI infrastructure startup",
    "Nepal startup",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ResonanceOps — AI Model Monitoring & Observability",
    description:
      "Model monitoring, drift detection, evaluation, and alerting for teams running AI in production.",
    siteName: "ResonanceOps",
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ResonanceOps — AI Model Monitoring & Observability",
    description:
      "Model monitoring, drift detection, evaluation, and alerting for teams running AI in production.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ResonanceOps",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "ResonanceOps is an early-stage AI infrastructure startup based in Lalitpur, Nepal, offering model monitoring, drift detection, evaluation, and alerting for teams running machine learning and LLM systems in production.",
  email: "hello@resonanceops.ltd",
  telephone: "+977-981-0234789",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jhamsikhel",
    addressLocality: "Lalitpur",
    postalCode: "44700",
    addressCountry: "NP",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--bg)] text-[var(--fg)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
