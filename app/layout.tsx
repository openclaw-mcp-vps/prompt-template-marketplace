import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PromptMarket – Buy & Sell Proven AI Prompt Templates",
  description: "Marketplace for buying and selling tested AI prompt templates with performance metrics, ratings, and use case documentation."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f39f4dd2-3c50-4cb9-bca8-2802a5f7a2d5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
