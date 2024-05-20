import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans";
import { Toaster } from "sonner"
import { cn } from "@/lib/utils"
import { TRPCReactProvider } from "@/trpc/react";
import { fontHeading, fontMono } from "@/lib/fonts";
import { ThemeProvider } from "@/components/providers";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" 
    className={cn(
      "min-h-screen bg-background font-sans antialiased",
        GeistSans.variable,
        GeistMono.variable,
        fontHeading.variable,
        fontSans.variable,
        fontMono.variable
    )}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </ThemeProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
