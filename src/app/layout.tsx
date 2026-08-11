import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const title = `${profile.name} — ${profile.role}`;
const description =
  "Systems Engineer specialized in backend engineering and software architecture with C#, .NET 8/9, ASP.NET Core, PostgreSQL and React. Clean Architecture, DDD, CQRS and production deployments.";

export const metadata: Metadata = {
  metadataBase: new URL("https://joaquinolivo.vercel.app"),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Joaquín Olivo",
    "Backend Developer",
    ".NET Developer",
    "C#",
    "ASP.NET Core",
    "Full-Stack Developer",
    "Clean Architecture",
    "DDD",
    "CQRS",
    "React",
    "PostgreSQL",
    "Colombia",
  ],
  authors: [{ name: profile.fullName }],
  creator: profile.fullName,
  openGraph: {
    type: "website",
    locale: "en_US",
    title,
    description,
    siteName: title,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8fa" },
    { media: "(prefers-color-scheme: dark)", color: "#05070d" },
  ],
};

/**
 * Runs before paint so the stored theme is applied without a flash of the
 * wrong palette. Kept as a string literal because it must be inline.
 */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${jetbrains.variable}`}>
        <div className="app-backdrop" aria-hidden="true" />
        <div className="app-glow" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
