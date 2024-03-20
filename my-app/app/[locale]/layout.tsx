import type { Metadata } from "next";
import localFont from 'next/font/local'
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { LocalesProvider } from "@/components/locales-provider"
import "./globals.css";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });
const roboto = localFont({
  src: [
    {
      path: './fonts/NotoSansSC-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/NotoSansSC-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  params: { locale },
  children,
}: Readonly<{
  params: { locale: string }; 
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className="h-full scroll-smooth">
      <body
        className={cn(
          roboto.variable,
          roboto.className,
          "min-h-screen bg-background font-sans antialiased"
        )}>
          <LocalesProvider locale={locale}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </LocalesProvider>
      </body>
    </html>
  );
}
