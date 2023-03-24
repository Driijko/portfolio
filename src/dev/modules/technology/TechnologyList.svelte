<!-- SCRIPTS ///////////////////////////////////////////////// -->
<script>

  // IMPORT COMPONENTS ---------------------------------------
  import ExpandableList from "../ExpandableList.svelte";
  import HTML from "./HTML.svelte";
  import CSS from "./CSS.svelte";
  import JavaScript from './JavaScript.svelte';
  import SVG from "./SVG.svelte";
  import React from "./React.svelte";
  import Svelte from "./Svelte.svelte";
  import GSAP from "./GSAP.svelte";

  // PROPS ---------------------------------------------------
  export let main;

  // LOCAL SETTINGS ----------------------------------------------
  let technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "SVG",
    "React",
    "Svelte",
    "GSAP3",
  ];

</script>

<!-- MARKUP ////////////////////////////////////////////// -->
<ExpandableList>
  <div id="area1" slot="main-list" 
    let:selectItem={selectItem} let:currentSelected={currentSelected}
  >
    <h2>
      Technology
      <span>*Click a technology to learn more</span>
    </h2>
    <ul>
      {#each technologies as technology, index}
      <li>
        <button class="main-list-button" on:click={()=> selectItem(index)} type="button" class:selected={currentSelected === index}>{technology}</button>
      </li>
      {/each}
    </ul>
  </div>

  <div id="area2" slot="selected-list-item" 
    let:closeArea2={closeArea2} let:currentSelected={currentSelected}
  >
    {#if currentSelected === 0}
      <HTML {main} />
    {:else if currentSelected === 1}
      <CSS {main} />
    {:else if currentSelected === 2}
      <JavaScript {main} />
    {:else if currentSelected === 3}
      <SVG {main} />
    {:else if currentSelected === 4}
      <React {main} />
    {:else if currentSelected === 5}
      <Svelte {main} />
    {:else if currentSelected === 6}
      <GSAP {main} />
    {/if}
    <button id="close-area2" type="button" on:click={closeArea2}>X</button>
  </div>
</ExpandableList>

<!-- STYLE //////////////////////////////////////////////////////// -->
<style>
  #area1, #area2 {
    height: 100%;
  }
  #area1 {
    padding: 1rem;
    background-color: var(--color2);
    opacity: 0;
    animation: fade-in 2s 1s forwards ease-out;
  }
  h2 {
    background-color: var(--color1-1);
    color: var(--color2) ;
    font-family: "Julius Sans One", sans-serif;
    font-size: 2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 20%;
    line-height: 1.5;
    border-radius: 0.3rem 0.3rem 0 0;
    position: relative;
  }
  h2 span {
    position: absolute;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 0.8rem;
    animation: fade-out 5s 4s ease-out forwards;
    bottom: 0%;
  }
  ul {
    border: 0.3rem solid var(--color1-1);
    height: 80%;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 0.3rem 0.3rem;
  }
  li {
    border: 0.2rem solid var(--color1-1);
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: var(--color1-2);
  }
  .main-list-button {
    border: 0.1rem solid var(--color2);
    width: 10rem;
    font-size: 1.4rem;
    border-radius: 0.3rem;
    background-color: var(--color1);
    color: var(--color2);
    transition-property: width, height, font-size, background-color;
    transition-duration: 1s;
    transition-timing-function: ease-out;
  }
  @media (hover:hover) {
    .main-list-button:hover:not(.selected), .main-list-button:focus:not(.selected) {
      background-color: var(--color3);
      transform: scale(1.15);
    }
    .main-list-button.selected {
      border-radius:0;
      width: 100%;
      height: 100%;
      font-size: 2rem;
      border-color: transparent;
      cursor: default;
      color: var(--color2);
      transform: scale(1);
      background-color: var(--color1);
    }
  }
  @media screen and (orientation: portrait) {
    #area2 {
      position: relative;
      border-top: 0.3rem solid var(--color2-1);
    }
    #close-area2 {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;
      background-color: var(--color1);
      color: var(--color2);
      font-size: 2rem;
      font-weight: bold;
      height: 10%;
      width: calc(var(--viewport-height)/10);
      border-left: 0.3rem solid var(--color2-1);
    }
  }
  @media (hover:hover) and (orientation: portrait) {
    #close-area2:hover, #close-area2:focus {
      color: var(--color3);
      background-color: var(--color1-1);
    }
  }
  @media screen and (orientation: landscape) {
    #area2 {
      border: 0.5rem solid var(--color1);
      background-color: var(--color1);
      opacity: 0;
      animation: fade-in 2s 2s forwards ease-out;
    }

    #close-area2 {
      display: none;
    }
  }
</style>