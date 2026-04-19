import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Assistant } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin", "hebrew"],
});

export const metadata: Metadata = {
  title: "ADLER | The 2026 Generation",
  description: "תפילדנית ברמה אחרת. הדור הבא של הגנה וסטייל לתפילין. עיצוב 2026. כבוד למסורת.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${inter.variable} ${assistant.variable} antialiased`}
    >
      <body className="min-h-screen bg-black text-white">
        {children}
      </body>
    </html>
  );
}
