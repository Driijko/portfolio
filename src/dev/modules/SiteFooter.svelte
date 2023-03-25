<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  import {currentPageName, pageExit } from "../stores/site.js";
</script>

<!-- MARKUP ////////////////////////////////////////////////////////// -->
<footer>
  <div id="background1" class="background"></div>
  <div id="container">
    <h3>Explore</h3>
    <ul>
      <div id="background2" class="background"></div>
      <li class:excluded={$currentPageName === "home"} >
        <a href={null} 
          on:click|preventDefault={()=> pageExit("home")}
        >Home</a>
      </li>
      <li class:excluded={$currentPageName === "portfolio"}>
        <a href={null} 
          on:click|preventDefault={()=> pageExit("portfolio")}
        >Portfolio</a>
      </li>
      <li class:excluded={$currentPageName === "technology"}>
        <a href={null}  
          on:click|preventDefault={()=> pageExit("technology")}
        >Technology</a>
      </li>
      <li class:excluded={$currentPageName === "cv"}>
        <a href={null}  
          on:click|preventDefault={()=> pageExit("cv")}
        >CV</a>
      </li>
    </ul>
  </div>
</footer>

<!-- STYLES ///////////////////////////////////////////////////////////// -->
<style>
  footer {
    height: var(--viewport-height);
    position: relative;
    display: flex;
    justify-content: center;
  }
  #container {
    height: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    width: 100%;
    border-left: 0.3rem solid var(--color1-1);
    border-right: 0.3rem solid var(--color1-1);
  }
  h3 {
    font-family: "Julius Sans One", sans-serif;
    font-size: 3rem;
    text-align: center;
    padding: 1rem;
    color: var(--color1-2);
    background-color: var(--color1);
  }
  ul {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10vh;
    position: relative;
  }
  .excluded {
    display: none !important;
  }
  a {
    font-size: 2.2rem;
    color: var(--color1-2);
    transition: color 0.5s ease-out;
  }
  a:hover, a:focus {
    color: var(--color2);
  }
  #background1 {
    background-color: var(--color1);
  }
  #background2 {
    background-image: url("./images/site-footer.webp");
    background-size: 200%;
    animation: background-shift 20s linear infinite;
  }
</style>