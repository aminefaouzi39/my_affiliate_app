import Providers from "./components/Providers";
import "./globals.css";

export const metadata = {
  title: "My Affiliate App",
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
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
        <Providers> {children}</Providers>
      </body>
    </html>
  );
}
