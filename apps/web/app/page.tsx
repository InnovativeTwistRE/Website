import { Button } from "@innovative-twist/ui";

/**
 * Phase 1 placeholder — proves Next.js, Tailwind, and packages/ui render
 * together end to end. Not the real homepage; that's designed and built in
 * the public website phase (CLAUDE.md 27, priority 2).
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-2xl font-semibold text-(--color-secondary-blue)">
        Innovative Twist Real Estate
      </h1>
      <p className="text-(--color-neutral-500)">
        apps/web scaffold — Phase 1 architecture setup, not the real homepage.
      </p>
      <Button>Placeholder button</Button>
    </main>
  );
}
