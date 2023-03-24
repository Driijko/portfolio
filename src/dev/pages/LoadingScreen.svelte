<!-- SCRIPTS /////////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS -----------------------------------------------
  import { onMount } from "svelte";

  // IMPORT STORES --------------------------------------------------
  import { currentPage, pageExit } from "../stores/site.js";

  // ELEMENT / COMPONENT REFERENCES -------------------------------
  let loadingScreen;

  // LIFECYCLE --------------------------------------------------
  onMount(()=> {
    currentPage.set(loadingScreen);
    window.addEventListener("load", ()=> pageExit("splash"));
    return ()=> {
      window.removeEventListener("load", ()=> pageExit("splash"));
    };
  });
</script>

<!-- MARKUP /////////////////////////////////////////////////////////// -->
<div bind:this={loadingScreen} id="loading-screen" class="page">
  <div class="animation"></div>
  <div class="animation"></div>
  <p>Loading...</p>
</div>


<!-- STYLES ///////////////////////////////////////////////////////// -->
<style>
  #loading-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: var(--viewport-height);
    transition: opacity var(--page-exit-duration) ease-out;
  }
  p {
    font-size: 2rem;
  }
  @keyframes rotate1 {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
  @keyframes rotate2 {
    from {transform: rotate(0deg);}
    to {transform: rotate(-360deg);}
  }
  .animation {
    position: absolute;
    width: 60%;
    height: 20%;
    border-radius: 50%;
    border: 0.5rem solid var(--color1);
  }
  #loading-screen div:nth-of-type(1) {
    animation: rotate1 4s ease-in-out infinite;
  }
  #loading-screen div:nth-of-type(2) {
    animation: rotate2 4s ease-in-out infinite;
  }
</style>