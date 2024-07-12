import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-chakra-petch",
});

export const metadata: Metadata = {
  title: "SackBird",
  description:
    "Hi Prayer! This is SACKBIRD Bless, We're just starting out, but already know for sure that we're gonna be listed! And pretty soon.\n\nYou are now a follower of SACKBIRD, the God of Luck and Wealth! \n\nPray daily, collect fortune, and earn coins. \n\nJoin the fun and dive into endless memes and riches!",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sackbird.vercel.app",
    siteName: "SackBird",
    title: "SackBird",
    description:
      "Hi Prayer! This is SACKBIRD Bless, We're just starting out, but already know for sure that we're gonna be listed! And pretty soon.\n\nYou are now a follower of SACKBIRD, the God of Luck and Wealth! \n\nPray daily, collect fortune, and earn coins. \n\nJoin the fun and dive into endless memes and riches!",
    images: [
      {
        url: "https://sackbird.vercel.app/sackbird.svg",
        width: 55,
        height: 55,
        alt: "SackBird",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://sackbird.vercel.app",
    title: "SackBird",
    description:
      "Hi Prayer! This is SACKBIRD Bless, We're just starting out, but already know for sure that we're gonna be listed! And pretty soon.\n\nYou are now a follower of SACKBIRD, the God of Luck and Wealth! \n\nPray daily, collect fortune, and earn coins. \n\nJoin the fun and dive into endless memes and riches!",
    creator: "@SackBird_O",
    images: ["https://sackbird.vercel.app/sackbird.svg"],
  },
  verification: {
    google: "vgo_FEwFemywRNfnkzcEHaQVpG45Yv6_46phbLQgjbM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={chakraPetch.className}>{children}</body>
    </html>
  );
}
