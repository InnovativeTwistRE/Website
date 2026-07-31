import { Button } from "@innovative-twist/ui";
import { PHONE_DISPLAY, PHONE_HREF } from "./navigation-data";

/**
 * Persistent bottom action bar on mobile only, per docs/navigation-
 * architecture.md's "sticky call button" / "sticky Schedule Consultation
 * button" requirement. Hidden while the full-screen MobileNav is open
 * (the caller controls that via conditional rendering).
 */
export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-(--color-light-grey) bg-white p-3 lg:hidden">
      <Button href={PHONE_HREF} variant="secondary" className="flex-1 text-center">
        Call {PHONE_DISPLAY}
      </Button>
      <Button className="flex-1">Schedule Consultation</Button>
    </div>
  );
}
