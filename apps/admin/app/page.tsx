import { Button } from "@innovative-twist/ui";

/**
 * Phase 1 placeholder — proves Next.js, Tailwind, and packages/ui render
 * together end to end. Not a real admin screen; that's built starting with
 * the Property Management Dashboard work later in the roadmap.
 */
export default function AdminHome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-2xl font-semibold text-(--color-secondary-blue)">
        Innovative Twist — Admin
      </h1>
      <p className="text-(--color-neutral-500)">
        apps/admin scaffold — Phase 1 architecture setup, not a real admin screen.
      </p>
      <Button variant="secondary">Placeholder button</Button>
    </main>
  );
}
