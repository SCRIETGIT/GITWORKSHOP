"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { getNavigationContext } from "@/lib/content/navigationData";

export default function KeyboardNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input/textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      const { previous, next } = getNavigationContext(pathname);

      switch (e.key) {
        case "ArrowRight":
        case " ": // Spacebar
          e.preventDefault();
          if (next) router.push(next);
          break;

        case "ArrowLeft":
          e.preventDefault();
          if (previous) router.push(previous);
          break;

        case "Home":
          e.preventDefault();
          router.push("/");
          break;

        case "f":
        case "F":
          if (!e.ctrlKey && !e.metaKey) {
            e.preventDefault();
            document.documentElement.requestFullscreen?.();
          }
          break;

        case "Escape":
          e.preventDefault();
          if (document.fullscreenElement) {
            document.exitFullscreen?.();
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pathname, router]);

  return null; // This is a behavior component, renders nothing
}
