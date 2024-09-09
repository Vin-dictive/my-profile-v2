import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "~/trpc/react";
import { Inter, Roboto_Mono } from 'next/font/google'
import { Metadata } from "next";
import { ThemeProvider } from 'next-themes';

const inter = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: "--font-inter"
});

const robotomono = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Vinay Valson",
  description: "Profile Page",
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <ThemeProvider attribute="class">
          <TRPCReactProvider>
            {children}
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
