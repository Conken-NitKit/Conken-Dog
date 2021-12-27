import { useState } from "react";

export const useToggle = (
  defaultOpen = false,
  onOpenChange?: (open?: boolean) => void
): [boolean, VoidFunction] => {
  const [state, setState] = useState(defaultOpen);

  const toggle = () => {
    if (onOpenChange) onOpenChange(state);
    const next = !state;
    setState(next);
    return next;
  };

  return [state, toggle];
};
