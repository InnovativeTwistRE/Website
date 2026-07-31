/**
 * Small, hand-built line-icon set — no external icon library dependency.
 * Simple enough to extend as more pages need icons. Each icon is a plain
 * 24x24 outline SVG, sized/colored by the parent via className.
 */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function HomeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 19 6v6c0 5-3 8-7 8.5-4-.5-7-3.5-7-8.5V6l7-2.5Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1" />
      <path d="M10 21v-3h4v3" />
    </svg>
  );
}

export function DiamondIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3h12l3 6-9 12L3 9l3-6Z" />
      <path d="M3 9h18M9 3 7.5 9 12 21l4.5-12L15 3" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.25" />
    </svg>
  );
}

export function PersonIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="3.25" />
      <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
    </svg>
  );
}

export function ClipboardIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="4.5" width="12" height="16" rx="1.5" />
      <path d="M9 4.5V3.5A1.5 1.5 0 0 1 10.5 2h3A1.5 1.5 0 0 1 15 3.5v1" />
      <path d="M9 11h6M9 15h6" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-4.5-4.5" />
    </svg>
  );
}

export function HandshakeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 12h4l3-3 3 3 3-3 3 3h4" />
      <path d="M8 12v3l3 3 2-2M16 12v3l-3 3" />
    </svg>
  );
}

export function KeyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="8" cy="15" r="4" />
      <path d="m11 12 7-7M15 8l2 2M18 5l2 2" />
    </svg>
  );
}

export function BookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v18H6.5A2.5 2.5 0 0 1 4 18.5v-13Z" />
      <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v18h5.5a2.5 2.5 0 0 0 2.5-2.5v-13Z" />
    </svg>
  );
}

export function ScaleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v18M8 21h8" />
      <path d="M12 5 4 8l4 6 4-6-4-3ZM12 5l8 3-4 6-4-6 4-3Z" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 5c-2.5 4.5-9.5 9-9.5 9Z" />
    </svg>
  );
}
