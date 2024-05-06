import { useEffect, useRef } from "preact/hooks";

export default function PageThumbnail() {
  const triggerRef = useRef(null);
  const leftSideRef = useRef<HTMLDivElement | null>(null);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.01,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && leftSideRef.current) {
          leftSideRef.current.classList.add("animate");
        } else if (leftSideRef.current) {
          leftSideRef.current.classList.remove("animate");
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

  return (
    <div>
      <div ref={leftSideRef} id="left-side" class="side">
        <h2 class="title">
          Sanguine
          <span class="fancy block">Oasis</span>
        </h2>
      </div>
      <div id="right-side" class="side">
        <h2 class="title">
          Sanguine
          <span class="fancy block">Oasis</span>
        </h2>
      </div>
      <span ref={triggerRef} class="absolute top-[100vh] p-1"></span>
      <div class="absolute w-full">
        <div class="max-w-screen-md mx-auto mt-[65vh]">
          <h1>Header</h1>
          <p style={{ height: "200vh" }}>
            This is a simple header.
          </p>
          <div>
            this is footer
          </div>
        </div>
      </div>
    </div>
  );
}
