import { RefObject, useEffect } from "react";

type EventType = MouseEvent | KeyboardEvent;

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: EventType) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const el = ref?.current;

      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    const escapeListener = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      handler(event);
    };

    document.addEventListener(`mousedown`, listener);
    document.addEventListener(`keyup`, escapeListener);

    return () => {
      document.removeEventListener(`mousedown`, listener);
      document.removeEventListener(`keyup`, escapeListener);
    };

    // Reload only if ref or handler changes
  }, [ref, handler]);
}
