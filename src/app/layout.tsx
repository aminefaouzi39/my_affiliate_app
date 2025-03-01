import Providers from "./components/Providers";
import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "TrendyPicks",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="verify-admitad" content="a5ffc795b5" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
