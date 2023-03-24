<!-- SCRIPTS /////////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS ------------------------------------------------
  import { onMount } from "svelte";

  // IMPORT STORES --------------------------------------------------
  import { currentPage } from "../stores/site.js";

  // IMPORT COMPONENTS ---------------------------------------------
  import Pamphlet from "../layers/Pamphlet.svelte";
  import SiteHeader from "../modules/SiteHeader.svelte";
  import PortfolioMain from "../modules/portfolio/PortfolioMain.svelte";
  import SiteFooter from "../modules/SiteFooter.svelte";
  import SiteMenuModal from "../layers/SiteMenuModal.svelte";

  // ELEMENT / COMPONENT REFERENCES ---------------------------------
  let page;

  // LIFECYCLE --------------------------------------------------------
  onMount(()=> {
    currentPage.set(page);
  });
</script>

<!-- MARKUP /////////////////////////////////////////////////////////// -->
<div bind:this={page} class="page">
  <Pamphlet totalSnapPointsOptions={[7, 7]}>
    <SiteHeader />
    <PortfolioMain />
    <SiteFooter />
  </Pamphlet>

  <SiteMenuModal />
</div>