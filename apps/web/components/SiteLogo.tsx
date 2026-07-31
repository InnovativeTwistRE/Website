"use client";

import { useEffect, useRef, useState } from "react";

export interface SiteLogoProps {
  className?: string;
  /** "white" for the transparent-over-hero header state; "color" otherwise. */
  variant?: "color" | "white";
}

const SRC_BY_VARIANT: Record<NonNullable<SiteLogoProps["variant"]>, string> = {
  color: "/brand/logo.png",
  white: "/brand/logo-white.png",
};

const FALLBACK_TEXT_CLASS: Record<NonNullable<SiteLogoProps["variant"]>, string> = {
  color: "text-(--color-primary-blue)",
  white: "text-white",
};

/**
 * Renders the real logo file once it exists at /public/brand/. Until then,
 * falls back to a text wordmark rather than a broken image icon — swap is
 * automatic the moment the real file is dropped in, no code change
 * required.
 */
export function SiteLogo({ className, variant = "color" }: SiteLogoProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // The browser evaluates <img src> as soon as it parses the raw HTML,
    // before React hydrates and attaches onError — a 404 that happens that
    // early fires and is gone before our handler exists to catch it. Check
    // on mount whether the image already finished loading as broken.
    setImageFailed(false);
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setImageFailed(true);
    }
  }, [variant]);

  if (imageFailed) {
    return (
      <span
        className={["block font-serif text-lg", FALLBACK_TEXT_CLASS[variant], className]
          .filter(Boolean)
          .join(" ")}
      >
        innovative twist real estate
      </span>
    );
  }

  return (
    <img
      ref={imgRef}
      src={SRC_BY_VARIANT[variant]}
      alt="Innovative Twist Real Estate"
      className={["h-12 w-auto", className].filter(Boolean).join(" ")}
      onError={() => setImageFailed(true)}
    />
  );
}
