import type { Metadata } from "next";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Filters",
  description: "An example of filters with hoooks in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
