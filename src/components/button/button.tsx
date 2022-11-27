import { component$, Slot } from '@builder.io/qwik';

interface ButtonProps {
  class?: string;
  type?: "reset" | "submit" | "button" | undefined;
  status?: "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" ;
} 

export const Button = component$((props: ButtonProps) => {

  return (
    <button className={`btn ${props.status ? `btn-${props.status}`: "btn-primary"}`} {...props}><Slot/></button>
  );
});
