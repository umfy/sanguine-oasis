import { useEffect, useRef } from "preact/hooks";
import { DictionaryEntry, Page, Navigation } from "@/components/Typography.tsx";

export default function PageThumbnail() {
  const triggerRef = useRef(null);
  const leftSideRef = useRef<HTMLDivElement | null>(null);
  const bottomLeftSideRef = useRef<HTMLDivElement | null>(null);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.01,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting && leftSideRef.current &&
          bottomLeftSideRef.current
        ) {
          leftSideRef.current.classList.add("animate");
          bottomLeftSideRef.current.classList.add("animate");
        }
      },
      options,
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }
    return () => {
      if (triggerRef.current) observer.unobserve(triggerRef.current);
    };
  }, []);

  const handleClick = () => {
    if (leftSideRef.current && bottomLeftSideRef.current) {
      leftSideRef.current.classList.add("animate");
      bottomLeftSideRef.current.classList.add("animate");
    }
  };

  return (
    <div>
      <div ref={leftSideRef} id="left-side" class="side" onClick={handleClick}>
        <h1 class="title">
          <span>Sanguine</span>
          <span class="fancy block">Oasis</span>
        </h1>
      </div>
      <div id="right-side" class="side">
        <h1 class="title">
          <span>Sanguine</span>
          <span class="fancy block">Oasis</span>
        </h1>
      </div>
      <span ref={triggerRef} class="absolute top-[100vh] p-1"></span>
      <div class="absolute w-full">
        <Page className="content">
          <div>
            <DictionaryEntry
              word={"sanguine"}
              pronounciation={"/ˈsæŋɡwɪn/"}
              type={"adjective"}
              definition={"marked by eager hopefulness : confidently optimistic; having the color of blood"}
            >
            </DictionaryEntry>
          </div>
          <div class="mt-16">
            <DictionaryEntry
              word={"oasis"}
              pronounciation={"/əʊˈeɪ.sɪs/"}
              type={"noun"}
              definition={"a fertile or green area in an arid region; something that provides refuge, relief, or pleasant contrast"}
            >
            </DictionaryEntry>
          </div>
          <Navigation href="/rules">Check the rules</Navigation>
          <div
            ref={bottomLeftSideRef}
            id="bottom-left-side"
            onClick={handleClick}
          >
          </div>
        </Page>
      </div>
    </div>
  );
}
