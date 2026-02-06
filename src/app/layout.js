import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://verify.yellow-labs.net"),

  title: {
    default: "Trust Center — Yellow Labs",
    template: "%s | Yellow Labs Trust Center",
  },

  description:
    "Official Yellow Labs Trust Center. Verify authenticated team members and confirm official Yellow Labs identities securely.",

  keywords: [
    "Yellow Labs",
    "Yellow Labs Verification",
    "Yellow Labs Trust Center",
    "Verify Yellow Labs Member",
    "Yellow Labs Identity Verification",
    "Yellow Labs Official Members",
    "Yellow Labs Team Directory",
    "Web3 Trust Verification",
  ],

  authors: [{ name: "Yellow Labs", url: "https://yellow-labs.net/" }],
  creator: "Yellow Labs",
  publisher: "Yellow Labs",

  applicationName: "Yellow Labs Trust Center",

  alternates: {
    canonical: "https://verify.yellow-labs.net",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://verify.yellow-labs.net",
    siteName: "Yellow Labs",
    title: "Trust Center — Official Yellow Labs Identity Verification",
    description:
      "Verify official Yellow Labs team members through the Yellow Labs Trust Center. Secure identity authentication portal.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Yellow Labs Trust Center — Official Identity Verification",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Trust Center — Yellow Labs",
    description:
      "Official Yellow Labs Identity Verification Portal. Confirm verified team members securely.",
    images: ["/og.png"],
    creator: "@YellowLabs_",
    site: "@YellowLabs_",
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://verify.yellow-labs.net" />
        <link rel="icon" href="/icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
