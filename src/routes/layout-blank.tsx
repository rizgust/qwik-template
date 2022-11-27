import { component$, Slot, $ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <section-center>
        <Slot />
      </section-center>
    </>
  );
});
