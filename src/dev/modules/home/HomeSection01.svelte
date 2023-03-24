<!-- SCRIPTS //////////////////////////////////////////////////////// -->
<script>
  import { onMount } from "svelte";

  onMount(()=> {
    const tl = gsap.timeline({repeat:-1});
    tl.to("#pattern1 path", {
      duration: 3, ease: "linear",
      attr: {d: "M 0,100 L 0,0 L 100,0,Z"}
    }, 0);
    tl.to("#pattern1 path", {
      duration: 3, ease: "linear",
      attr: {d: "M 0,100 L 100,100 L 100,0,Z"}
    }, 3);
    tl.to("#pattern1 path", {
      duration: 3, ease: "linear",
      attr: {d: "M 0,100 L 100,100 L 0,0,Z"}
    }, 6);
  });
</script>

<!-- MARKUP //////////////////////////////////////////////////////// -->
<section>
  <svg viewBox="0 0 100 100" preserveAspectRatio="none" >
    <rect x="55" y="0" width="45" height="30" />
    <rect x="0" y="70" width="45" height="30" />
  </svg>

    {#if window.innerHeight >= window.innerWidth}
      <svg viewBox="0 0 900 1600" preserveAspectRatio="none">
        <defs>
          <pattern id="pattern1" viewBox="0 0 100 100" width="20%" height="10%">
            <path 
              d="M 0,100
              L 0,0
              L 100,100
            z"/>
          </pattern>
        </defs>
        <rect fill="url(#pattern1)" x="0" y="0" width="900" height="1600" />
      </svg>
    {:else}
      <svg viewBox="0 0 1600 900" preserveAspectRatio="none">
        <defs>
          <pattern id="pattern1" viewBox="0 0 100 100" width="5%" height="10%">
            <path 
              d="M 0,100
              L 0,0
              L 100,100
            z"/>
          </pattern>
        </defs>
        <rect fill="url(#pattern1)" x="0" y="0" width="1600" height="900" />
      </svg>
    {/if}
  <h3>My Specialities:</h3>
  <p>
    <span ><em>1 . </em><br/><br/> Making websites that are:</span>
    <span>stylish</span>
    <span>user friendly</span>
    <span>and<br/> <span>flowing.</span></span>
  </p>
</section>

<!-- STYLES ////////////////////////////////////////////////////// -->
<style>
  section {
    height: var(--viewport-height);
    position: relative;
  }
  svg {
    position: absolute;
  }
  section svg:nth-of-type(1) {
    width: 100%;
    height: 80%;
    top: 20%;
    background-color: var(--color1-1);
  }
  section svg:nth-of-type(1) rect {
    fill: var(--color1);
  }
  section svg:nth-of-type(2) {
    top: 0%;
    width: 100%;
    height: 100%;
  }
  #pattern1 path {
    fill: var(--color1-1);
    stroke: var(--color1);
    stroke-width: 10;
  }
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    font-size: 1.5em;
    background-color: var(--color2-4);
    position: relative;
  }
  p {
    height: 80%;
    font-size: 1.5em;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  em {
    font-size: 2em;
  }
  p > span {
    background-color: var(--color2-5);
    padding: 2%;
    text-align: center;
    color: var(--color2);
  }
  p span:nth-of-type(2) {
    font-family: "Courgette";
  }
  p span:nth-of-type(4) span {
    font-family: "Courgette"
  }
  @media screen and (orientation: landscape) {
    p > span {
      position: absolute;
      border-radius: 5px;
      padding: 4% 10%;
    }
    p span:nth-of-type(1) {
      left: 10%;
      top: 0%;
    }
    p span:nth-of-type(2) {
      left: 8%;
      top: 50%;
    }
    p span:nth-of-type(3) {
      left: 30%;
      top: 62%;
    }
    p span:nth-of-type(4) {
      left: 58%;
      top: 43%;
    }
  }

</style>