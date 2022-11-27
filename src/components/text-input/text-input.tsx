import { component$, PropFunction } from '@builder.io/qwik';

interface TextInputProps {
  class?: string;
  className?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  status: string;
  onChange$?: PropFunction<(evt: any) => void>;
}

export const TextInput = component$((props: TextInputProps) => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      class={`input w-full max-w-xs ${props.status == "error"  ? "border-red-500" : ""}`}
      {...props}
      onChange$={props.onChange$}
    />
  );
});
