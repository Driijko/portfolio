<!-- SCRIPTS /////////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS ------------------------------------------------
  import { onMount } from "svelte";

  // IMPORT STORES --------------------------------------------------
  import { currentPage, pageExit } from "../stores/site.js";

  // ELEMENT / COMPONENT REFERENCES --------------------------------
  let splash;

  // LIFECYCLE ----------------------------------------------
  onMount(()=> {
    currentPage.set(splash);
    gsap.set(".rects", {transformOrigin: "50% 50%"});
    gsap.to(".rects", {
      duration: 20,
      rotate: 360,
      repeat: -1,
      ease: "linear",
    });
  });
</script>

<!-- MARKUP /////////////////////////////////////////////////////////// -->
<div bind:this={splash} class="page">
  <h1>DREEKO</h1>
  <p>
    <span>Web Development</span>
    <span>&middot</span>
    <span>Design</span>
    <span>&middot</span>
    <span>Animation</span>
  </p>
  <a on:click|preventDefault={()=> pageExit("home")} class="interface-style1" href="">Enter</a>
  <svg>
    <rect class="rects" x="0%" y="0%" />
    <rect class="rects" x="50%" y="0%" />
    <rect class="rects" x="0%" y="50%" />
    <rect class="rects" x="50%" y="50%" />
    <rect class="rects" x="25%" y="25%" />
  </svg>
</div>

<style>
  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: var(--viewport-height);
    row-gap: 1.5rem;
    transition: opacity var(--page-exit-duration) ease-out;
    color: var(--color2);
  }

  svg {
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    animation: fade-in 5s ease-in forwards;
  }

  h1 {
    font-size: 3rem;
    opacity: 0;
    animation: fade-in 3s 2s ease-in forwards;
    font-family: "Julius Sans One", sans-serif;
    letter-spacing: 0.3rem;
    padding: 1rem 0;
  }

  p {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.3rem;
    opacity: 0;
    animation: fade-in 3s 4s ease-in forwards;
  }

  a {
    margin-top: 1rem;
    width: 6rem;
    font-size: 1.5rem;
    height: 2.2rem;
    opacity: 0;
    animation: fade-in 3s 6s ease-in forwards;
  }

  .rects {
    width: 50%;
    height: 50%;
    fill: hsla(0, 100%, 50%, 0.5);
    stroke:hsla(0, 100%, 50%, 0.3);
    transform-origin: 50% 50%;
    stroke-width: 10;
  }
  svg .rects:nth-last-child(1) {
    fill:hsla(0, 100%, 50%, 0.7);
  }
</style>