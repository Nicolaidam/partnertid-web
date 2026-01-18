import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: "Partnertid – Træn jeres forhold hver uge",
    template: "%s – Partnertid",
  },
  description:
    "Partnertid hjælper par med en enkel, ugentlig rutine til at styrke forbindelsen, forebygge afstand og skabe nærvær i en travl hverdag.",
  applicationName: "Partnertid",
  keywords: [
    "partnertid",
    "parforhold",
    "ugentlig rutine",
    "nærvær",
    "kommunikation",
    "relationer",
    "par",
    "forebyggelse",
    "kærlighed",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Partnertid – Træn jeres forhold hver uge",
    description:
      "En enkel, ugentlig rutine for par, der vil styrke deres forbindelse og skabe mere nærvær.",
    url: "/",
    siteName: "Partnertid",
    locale: "da_DK",
    type: "website",
    images: [
      {
        url: "/image_love.png",
        alt: "Partnertid – styrk jeres forhold sammen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partnertid – Træn jeres forhold hver uge",
    description:
      "En enkel, ugentlig rutine for par, der vil styrke deres forbindelse og skabe mere nærvær.",
    images: ["/image_love.png"],
  },
  alternates: {
    canonical: "/",
  },
};

const displayFont = Playfair_Display({
  variable: "--font-display",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const bodyFont = Cormorant_Garamond({
  variable: "--font-body",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" suppressHydrationWarning>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
