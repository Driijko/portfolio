<!-- SCRIPTS /////////////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS ---------------------------------------
  import { onMount } from "svelte";
  import { currentPage } from "../stores/site.js";

  // IMPORT COMPONENTS ---------------------------------------
  import TechnologyMain from "../layers/TechnologyMain.svelte";
  import SiteMenuModal from "../layers/SiteMenuModal.svelte";

  // ELEMENT / COMPONENT REFERENCES ----------------------------
  let page;

  // LIFECYCLE -----------------------------------------------
  onMount(()=> {
    currentPage.set(page);
  })
</script>

<!-- MARKUP /////////////////////////////////////////////////////// -->
<div bind:this={page} class="page">
  <TechnologyMain />
  <SiteMenuModal />
</div>