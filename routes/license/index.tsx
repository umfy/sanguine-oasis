import { Anchor, Navigation, Page } from "@/components/Typography.tsx";

export default function License() {
  return (
    <Page className="pt-16">
      <h1 class="my-headline text-4xl font-bold text-gray-300">
        <Anchor></Anchor>
        License
      </h1>
      <div class="text-center pt-32">
        This game is licensed under the{" "}
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          class="underline text-gray-300 hover:text-current"
        >
          Creative Commons Attribution 4.0 International License (CC BY 4.0)
        </a>. You are free to use, modify, and distribute this work, provided
        you give appropriate credit and mention it as inspiration.
      </div>
      <Navigation href="/rules">Go back</Navigation>
    </Page>
  );
}
