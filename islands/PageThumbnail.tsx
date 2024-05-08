import { useEffect, useRef } from "preact/hooks";
import {
  DictionaryEntry,
  Navigation,
  Page,
  Thumbnail,
} from "@/components/Typography.tsx";

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
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animateSide();
      }
    }, options);

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }
    return () => {
      if (triggerRef.current) observer.unobserve(triggerRef.current);
    };
  }, []);

  const animateSide = () => {
    if (leftSideRef.current && bottomLeftSideRef.current) {
      leftSideRef.current.classList.add("animate");
      bottomLeftSideRef.current.classList.add("animate");
    }
  };

  return (
    <div>
      <div ref={leftSideRef} id="left-side" class="side" onClick={animateSide}>
        <Thumbnail />
      </div>
      <span ref={triggerRef} class="absolute top-[100vh] p-1"></span>
      <div class="relative">
        <Thumbnail />
        <Page className="content">
          <DictionaryEntry
            word={"sanguine"}
            pronounciation={"/ˈsæŋɡwɪn/"}
            type={"adjective"}
            definition={"marked by eager hopefulness : confidently optimistic; having the color of blood"}
          >
          </DictionaryEntry>
          <DictionaryEntry
            className="mt-16"
            word={"oasis"}
            pronounciation={"/əʊˈeɪ.sɪs/"}
            type={"noun"}
            definition={"a fertile or green area in an arid region; something that provides refuge, relief, or pleasant contrast"}
          >
          </DictionaryEntry>
          <Navigation href="/rules">Check the rules</Navigation>
        </Page>
        <div
          ref={bottomLeftSideRef}
          id="bottom-left-side"
          onClick={animateSide}
        >
        </div>
      </div>
    </div>
  );
}
