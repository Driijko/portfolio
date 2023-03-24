<!-- SCRIPTS //////////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS --------------------------------------------
  import { fly } from 'svelte/transition';

  // PROPS --------------------------------------------------
  export let header;
  export let subHeader;
  export let link;
  export let main;

  // LOCAL SETTINGS ----------------------------------------------
  let transitionDuration = window.innerWidth >= window.innerHeight ? 1000 : 0;
</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
<section 
  in:fly="{{
    delay: transitionDuration, 
    duration: transitionDuration, 
    x: window.innerWidth * 0.7
  }}" out:fly="{{
    duration:transitionDuration, 
    x: window.innerWidth * 0.7
  }}"
>
  <h3>{header}</h3>
  <div class="description-body" 
    on:scroll|once={()=> main.scroll({
      top: window.innerHeight, 
      behavior: "smooth"
    })}
  >
    {#if subHeader}
      <p class="sub-header">
        {subHeader}
      </p>
    {/if}
    <slot />
    <p>Learn more at: <a href={link[0]} target="_blank" rel="noopener noreferrer">{link[1]}</a></p>
  </div>
</section>

<!-- STYLES ////////////////////////////////////////////////// -->
<style>
  section {
    height: 100%;
  }
  h3 {
    background-color: var(--color1);
    height: 10%;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    font-size: 2rem;
    color: var(--color2);
    font-family: "Montserrat", sans-serif;
  }
  .description-body {
    height: 90%;
    padding: 1rem 0.5rem 0 3vw;
    line-height: 1.5;
    overflow-y: scroll;
    -ms-overflow-style: none;  
    scrollbar-width: none;  
    background-color: var(--color2);
  }
  .description-body::-webkit-scrollbar {
    display: none;
  }
  .sub-header {
    font-size: 1.3rem;
    font-weight: bold;
  }
  .description-body :global(p) {
    margin: 1rem 0;
    word-spacing: 0.2rem;
    max-width: 70ch;
  }
  .description-body :global(figure) {
    background-color: var(--color1);
    max-width: 70ch;
    border: 0.3rem solid var(--color1-1);
    border-radius: 0.4rem;
    color: var(--color2);
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    padding: 1rem;
  }
  .description-body :global(a) {
    text-decoration: underline;
    word-spacing: 0;
  }
  .description-body :global(input) {
    font-size: 1rem;
  }
  .description-body :global(figure img) {
    max-height: calc(var(--viewport-height) * 0.5);
    flex: 1;
  }
  .description-body :global(figcaption) {
    border-top: 0.3rem solid var(--color1-1);
    background-color: var(--color1-1);
    padding: 0.1rem 1rem;
    width: 100%;
    word-spacing: 0.2rem;
  }
  @media (hover:hover) {
    .description-body :global(p a:hover), .description-body :global(p a:focus) {
      color: var(--color2);
      background-color: var(--color1);
    }
  }
  @media screen and (orientation: portrait) {
    .description-body {
      border-top: 0.3rem solid var(--color2-1);
    }
  }
</style>