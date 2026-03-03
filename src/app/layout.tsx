import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import { ClientBody } from "./ClientBody";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "I.IZHIA | Nederlandstalige Reggae & Dancehall Artiest",
  description: "I.IZHIA is een Nederlandstalige artiest die zijn eigen geluid bouwt vanuit reggae en dancehall, met duidelijke invloeden uit rap en hiphop.",
  keywords: ["I.IZHIA", "reggae", "dancehall", "Nederlands", "muziek", "artiest", "hiphop", "rap"],
  openGraph: {
    title: "I.IZHIA | Nederlandstalige Reggae & Dancehall Artiest",
    description: "I.IZHIA is een Nederlandstalige artiest die zijn eigen geluid bouwt vanuit reggae en dancehall.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={oswald.variable} suppressHydrationWarning>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
