import { ComponentChildren } from "preact";
import { JSX } from "preact";
interface PageProps {
  className?: string;
  children: ComponentChildren;
}

export function Page(props: PageProps) {
  return (
    <div
      class={`flex flex-col max-w-screen-lg min-h-screen mx-auto px-6 sm:px-12 ${props.className}`}
    >
      {props.children}
      <Footer></Footer>
    </div>
  );
}

export function Footer() {
  return (
    <div class="text-center mt-auto pt-20 relative">
      <span class="footer-line"></span>
      <div class="flex justify-center gap-8 pb-4">
        <a
          href="https://github.com/umfy/sanguine-oasis"
          class="hover:text-gray-50"
        >
          Source
        </a>
        <a href="/license" class="hover:text-gray-50">License</a>
      </div>
    </div>
  );
}

type DictionaryEntryProps = {
  word: string;
  type: string;
  pronounciation: string;
  definition: string;
};

export function DictionaryEntry(props: DictionaryEntryProps) {
  return (
    <div>
      <div class="grid grid-cols-3 sm:grid-cols-4">
        <section>
          <div class="inline-block">
            <div class="flex flex-col items-center">
              <h2 class="text-4xl">{props.word}</h2>
              <p class="pt-2 text-2xl whitespace-nowrap">
                {props.pronounciation}
              </p>
            </div>
          </div>
        </section>
        <section class="col-span-3">
          <p class="pt-8 px-2 sm:pl-8 sm:pt-2 text-lg">
            <span class="ml-[-1rem] mr-[1rem] pl-4 hidden sm:inline-block">
              —
            </span>
            {props.definition}
          </p>
        </section>
      </div>
    </div>
  );
}

export function Navigation(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <div class="underline mt-32 text-2xl w-full text-center hover:text-gray-50">
      <a {...props}></a>
    </div>
  );
}

export function Anchor() {
  return (
    <a
      class="my-anchor"
      aria-hidden="true"
      tabindex={-1}
      href="#"
    >
      <svg
        class="octicon octicon-link"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
        >
        </path>
      </svg>
    </a>
  );
}
