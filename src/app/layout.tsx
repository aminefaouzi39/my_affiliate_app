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
        <meta name="verify-admitad" content="ee0513e4ea" />
      </head>
      <body>
        <Providers> {children}</Providers>
      </body>
    </html>
  );
}
