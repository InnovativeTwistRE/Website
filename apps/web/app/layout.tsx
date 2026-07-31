import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Innovative Twist Real Estate",
  description: "Education first. Data over emotion. Build wealth through real estate.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {/*
          SiteHeader is sticky and takes up real layout space (solid white,
          no transparent-over-hero — see docs/navigation-architecture.md),
          so page content naturally starts below it, no top padding needed.
          Bottom padding on mobile only, for the fixed MobileStickyBar.
        */}
        <div className="pb-20 lg:pb-0">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
