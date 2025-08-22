import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Ijay summarizer App",
  description: "Ijay_dev",
  generator: "Ijay_dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children} <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
