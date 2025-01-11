import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Header } from "@/components/header";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fatih Kayan - Software Engineer",
  description:
    "Portfolio of Fatih Kayan, a Software Engineer specializing in Web and Mobile Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NuqsAdapter>
            <Header />
            {children}
          </NuqsAdapter>
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  );
}
