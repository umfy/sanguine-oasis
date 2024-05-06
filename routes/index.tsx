export default function PageHeader() {
  return (
    <div>
      <div id="left-side" class="side">
        <h2 class="title">
          Sometimes a simple header is
          <span class="fancy">better</span>
        </h2>
      </div>
      <div id="right-side" class="side">
        <h2 class="title">
          Sometimes a simple header is
          <span class="fancy">worse</span>
        </h2>
      </div>
      <div class="absolute top-[100vh]">
        <h1>Header</h1>
        <p>
          This is a simple header.
        </p>
      </div>
    </div>
  );
}
