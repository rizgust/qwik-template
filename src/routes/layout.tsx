import { component$, Slot, $ } from '@builder.io/qwik';
import { Menu } from '~/components/menu/menu';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <Menu 
          items = {['one', 'two']}
          onClick= { $((index: number) => console.log(index))}
        />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
        </a>
      </footer>
    </>
  );
});
