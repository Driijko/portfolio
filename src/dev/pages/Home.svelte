<!-- SCRIPTS /////////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS ------------------------------------------------
  import { onMount } from "svelte";

  // IMPORT STORES --------------------------------------------------
  import { currentPage } from "../stores/site.js";

  // IMPORT COMPONENTS ---------------------------------------------
  import Pamphlet from "../layers/Pamphlet.svelte";
  import SiteHeader from "../modules/SiteHeader.svelte";
  import HomeMain from "../modules/home/HomeMain.svelte";
  import SiteFooter from "../modules/SiteFooter.svelte";
  import SiteMenuModal from "../layers/SiteMenuModal.svelte";

  // ELEMENT / COMPONENT REFERENCES ---------------------------------
  let home;

  // LOCAL STATE -----------------------------------------------
  let overlayVisible = 0;

  // TRACKING  ------------------------------------------------
  function trackCurrentSnapPoint(snapPoint) {
    if (window.innerWidth < window.innerHeight) {
      if (snapPoint > 1 && snapPoint < 4) {
        overlayVisible = 1;
      } else if (snapPoint > 3 && snapPoint < 7) {
        overlayVisible = 2;
      } else {
        overlayVisible = 0;
      }
    }
  }

  // LIFECYCLE --------------------------------------------------------
  onMount(()=> {
    currentPage.set(home);
  });
</script>

<!-- MARKUP /////////////////////////////////////////////////////////// -->
<div bind:this={home} class="page">
  <Pamphlet {trackCurrentSnapPoint}
    totalSnapPointsOptions={[8, 11]}
  >
    <SiteHeader />
    <HomeMain />
    <SiteFooter />
  </Pamphlet>

  <p aria-hidden="true" class:overlay-visible={overlayVisible === 1}>
    2.) Pixel-Perfect <br/> Responsive Design
  </p>

  <p aria-hidden="true" class:overlay-visible={overlayVisible === 2}>
    3.) Optimized for <br/> High Performance
  </p>
  <SiteMenuModal />
</div>

<!-- STYLES ///////////////////////////////////////////////// -->
<style>
 p {
  position: fixed;
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  padding: 1rem 0;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  pointer-events: none;
  transition: opacity 0.5s ease-out;
  opacity: 0;
  line-height: 1.3;
 }
 p:nth-of-type(1) {
  color: var(--color1-2);
  background-color: var(--color1-1);
  border-bottom: 0.3rem solid var(--color1-2);
 }
 p:nth-of-type(2) {
  background-color: var(--color2-1);
  border-bottom: 0.4rem solid var(--color1-1);
 }
 .overlay-visible {
  opacity: 1;
 }
 @media screen and (min-width: 650px) {
  p {
    font-size: 2rem;
    padding: 4vh 0;
  }
  br {
    display: none;
  }
 }
</style>