<!-- SCRIPTS //////////////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS -------------------------------------------------
  import { onMount } from "svelte";

  // LIFECYCLE -----------------------------------------------------
  onMount(()=> {
    gsap.from(".paths1", {
      delay: 1,
      duration: 10,
      opacity: 0,
      attr: {
        d: "M 50 -10 Q -200 50 50 110",
      }
    })
  });
</script>

<!-- MARKUP///////////////////////////////////////////////// -->
<header>
  <svg class="background" viewBox="0 0 100 100">
    <path class="paths1" d="M 50 -10 Q -200 50 50 110"/>
    <path class="paths1" d="M 50 -10 Q -150 50 50 110"/>
    <path class="paths1" d="M 50 -10 Q -100 50 50 110"/>
    <path class="paths1" d="M 50 -10 Q -50 50 50 110"/>
    <path class="paths1" d="M 50 -10 Q -25 50 50 110"/>
    <path class="paths1" d="M 50 -10 Q 0 50 50 110"/>
    <path class="paths1" d="M 50 -10 Q 25 50 50 110"/>
    <path class="paths1" d="M 50 -10 Q 40 50 50 110"/>
    <path class="paths1" d="M 50 -10 Q 300 50 50 110"/>
    <path class="paths1" d="M 50 -10 Q 250 50 50 110"/>
    <path class="paths1" d="M 50 -10 Q 200 50 50 110"/>
    <path class="paths1" d="M 50 -10 Q 150 50 50 110"/>
    <path class="paths1" d="M 50 -10 Q 125 50 50 110"/>
    <path class="paths1" d="M 50 -10 Q 100 50 50 110"/>
    <path class="paths1" d="M 50 -10 Q 75 50 50 110"/>
    <path class="paths1" d="M 50 -10 Q 60 50 50 110"/>
  </svg>
  <h2>Website<br/>Portfolio</h2>
  <svg id="scroll-indicator" viewBox="0 0 448 512">
    <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
  </svg>
</header>

<!-- STYLE ////////////////////////////////////////////////////// -->
<style>
  header {
    height: calc(var(--viewport-height) - 7.5rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
    position: relative;
  }
  @media screen and (min-width: 600px) {
    header {
      height: calc(var(--viewport-height) - 9rem);
    }
  }
  h2 {
    font-family: "Julius Sans One", sans-serif;
    font-size: 2.5rem;
    color: var(--color2);
    opacity: 0;
    animation: fade-in 10s 2s ease-out forwards;
    text-align: center;
    line-height: 1.2;
  }
  #scroll-indicator {
    padding: 0.7rem;
    width: 3.5rem;
    color: var(--color2);
    border-radius: 50%;
    opacity: 0;
    animation: fade-in 2s 10s ease-out forwards;
  }
  .background {
    padding: 0;
    background-size: auto;
  }
  .paths1 {
    stroke-width: 70;
    stroke: hsla(0, 100%, 50%, 0.13);
    fill: transparent;
  }
</style>