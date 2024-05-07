import { ComponentChildren } from "preact";
interface PageProps {
  className?: string;
  children: ComponentChildren;
}

export function Page(props: PageProps) {
  return (
    <div
      class={`flex flex-col max-w-screen-lg min-h-screen mx-auto px-12 ${props.className}`}
    >
      {props.children}
      <div class="text-center mt-auto">
        this is footer
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
              <p class="pt-2 text-2xl">{props.pronounciation}</p>
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
