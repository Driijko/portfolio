<!-- SCRIPTS ////////////////////////////////////////////////////// -->
<script>
  // IMPORT STORES & SCRIPTS --------------------------------------------
  import {setUp, currentPageName, resetCount} from "./stores/site.js";

  // IMPORT PAGE COMPONENTS -------------------------------------------
  import LoadingScreen from "./pages/LoadingScreen.svelte";
  import Splash from "./pages/Splash.svelte";
  import Home from "./pages/Home.svelte";
  import Portfolio from "./pages/Portfolio.svelte";
  import Technology from "./pages/Technology.svelte";
  import CVPage from "./pages/CVPage.svelte";
  import HirePage from "./pages/HirePage.svelte";
  import AboutPage from "./pages/AboutPage.svelte";

  // RUN SCRIPTS ----------------------------------------------------
  setUp();

</script>

<!-- MARKUP --------------------------------------------------- -->
<div>
  {#if $currentPageName === "loading-screen"}
    <LoadingScreen />
  {:else if $currentPageName === "splash"}
    {#key $resetCount}
      <Splash />
    {/key}
  {:else if $currentPageName === "home"}
    {#key $resetCount}
      <Home />
    {/key}
  {:else if $currentPageName === "portfolio" }
    {#key $resetCount}
      <Portfolio />
    {/key}
  {:else if $currentPageName === "technology"}
    {#key $resetCount}
      <Technology />
    {/key}
  {:else if $currentPageName === "hire"}
    {#key $resetCount}
      <HirePage />
    {/key}
  {:else if $currentPageName === "cv"}
    {#key $resetCount}
      <CVPage />
    {/key}
  {:else if $currentPageName === "about"}
    {#key $resetCount}
      <AboutPage />
    {/key}
  {/if}
</div>