import {component$, Slot} from '@builder.io/qwik';

interface CardContentProps {
  class?: string;
  className?: string;
}

export const CardContent = component$((props : CardContentProps) => {
  return (
    <div className={`card px-6 py-4 w-96 bg-base-100 shadow-xl 
      ${props.className}
      `}>
      <div className="p-6">
        <Slot />
      </div>
    </div>
  );
});
