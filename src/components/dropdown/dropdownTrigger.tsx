import { component$, Slot } from '@builder.io/qwik';

interface DropdownTriggerProps {
  class?: string;
  className?: string;
}

export const DropdownTrigger = component$((props: DropdownTriggerProps) => {
  return (
    <label tabIndex={0} className="btn" {...props}><Slot /></label>
  );
});
