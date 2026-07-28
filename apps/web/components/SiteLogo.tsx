"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Renders the real logo file once it exists at /public/brand/logo.png.
 * Until then, falls back to a text wordmark rather than a broken image icon
 * — swap is automatic the moment the real file is dropped in, no code
 * change required.
 */
export function SiteLogo({ className }: { className?: string }) {
  const [imageFailed, setImageFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // The browser evaluates <img src> as soon as it parses the raw HTML,
    // before React hydrates and attaches onError — a 404 that happens that
    // early fires and is gone before our handler exists to catch it. Check
    // on mount whether the image already finished loading as broken.
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setImageFailed(true);
    }
  }, []);

  if (imageFailed) {
    return (
      <span className={["block leading-none", className].filter(Boolean).join(" ")}>
        <span className="block font-serif text-lg text-(--color-neutral-900)">innovative</span>
        <span className="block font-serif text-xl font-bold tracking-wide text-(--color-primary-blue)">
          TWIST
        </span>
        <span className="block text-[10px] font-medium tracking-[0.2em] text-(--color-neutral-500) uppercase">
          Real Estate
        </span>
      </span>
    );
  }

  return (
    <img
      ref={imgRef}
      src="/brand/logo.png"
      alt="Innovative Twist Real Estate"
      className={["h-12 w-auto", className].filter(Boolean).join(" ")}
      onError={() => setImageFailed(true)}
    />
  );
}
