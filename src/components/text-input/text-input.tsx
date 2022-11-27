import { component$, PropFunction } from '@builder.io/qwik';

interface TextInputProps {
  class?: string;
  className?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  label?: string;
  message?: string;
  value?: string;
  status: string;
  type: string;
  onChange$?: PropFunction<(evt: any) => any>;
}

export const TextInput = component$((props: TextInputProps) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{props.label}</span>
      </label>
      <input
        placeholder={props.placeholder}
        className={`input input-md input-bordered w-full max-w-xs" ${props.status == "error"  ? "input-error" : ""}`}
        {...props}
        onChange$={props.onChange$}
      />
        <span className={`label-text-alt italic ${props.status == "error"  ? "text-error" : ""}`}>{props.message}</span>
    </div>
  );
});
