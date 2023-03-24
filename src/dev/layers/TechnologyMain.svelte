<!-- SCRIPTS ///////////////////////////////////////////////////////// -->
<script>
  // IMPORT COMPONENTS --------------------------------------------
  import SiteHeader from "../modules/SiteHeader.svelte";
  import TechnologyList from "../modules/technology/TechnologyList.svelte";

  // ELEMENT REFERENCES --------------------------------------------
  let main;
</script>

<!-- MARKUP ////////////////////////////////////////////////////////// -->
<main bind:this={main} class="regular-scroll">
  <SiteHeader />
  <TechnologyList {main} />
</main>