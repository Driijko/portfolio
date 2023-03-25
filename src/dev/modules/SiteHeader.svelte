<!-- SCRIPTS /////////////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS -----------------------------------------------
  import { currentPageName, pageExit } from "../stores/site.js";
  import { modals } from "../stores/page.js";

  // ELEMENT / COMPONENT REFERENCES -------------------------------
  let home;

</script>

<!-- MARKUP ///////////////////////////////////////////////////////////////// -->
<header>

  <div id="site-header-area1">
    <h1>DREEKO</h1>
    <p>
      <span>Web Development</span>
      <span>&middot</span>
      <span>Design</span>
      <span>&middot</span>
      <span>Animation</span>
    </p>
  </div>

  <nav id="site-header-area2">
    <ul>
      <li class:excluded={$currentPageName === "home"} >
        <a href={null} 
          class="interface-style2"
          on:click|preventDefault={()=> pageExit("home")}
        >Home</a>
      </li>
      <li class:excluded={$currentPageName === "portfolio"}>
        <a href={null} 
          class="interface-style2"
          on:click|preventDefault={()=> pageExit("portfolio")}
        >Portfolio</a>
      </li>
      <li class:excluded={$currentPageName === "technology"}>
        <a href={null} 
          class="interface-style2"
          on:click|preventDefault={()=> pageExit("technology")}
        >Technology</a>
      </li>
      <li class:excluded={$currentPageName === "cv"}>
        <a href={null} id="special"
          class="interface-style2"
          on:click|preventDefault={()=> pageExit("cv")}
        >CV</a>
      </li>
    </ul>
  </nav>

  <div id="site-header-area4">
    <button on:click={()=> modals.open("siteMenu")} class="center" type="button">
      <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <title>Menu</title>
        <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/>
      </svg>
    </button>
  </div>
  
</header>

<!-- STYLES /////////////////////////////////////////////////////////////////// -->
<style>

header {
  height: 7.5rem;
  background-color: var(--color1);
  color: var(--color2);
  position: relative;
  border-bottom: 0.1rem solid var(--color2);
  opacity: 0;
  animation: fade-in 2s forwards ease-out;
}

header > * {
  position: absolute;
}
#special {
  font-weight: bold;
  color: var(--color3-3);
}
@media (hover:hover) {
  #special:hover, #special:focus {
    color: var(--color3);
  }
}


/* CONFIGURATION 1 ////////////////////////// */
#site-header-area1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  height: 100%;
  align-items: flex-start;
  gap: 0.7rem;
  padding-left: 1rem;
}

#site-header-area1 h1 {
  font-size: 3rem;
  font-family: "Julius Sans One", sans-serif;
}

#site-header-area1 p, #site-header-area2 {
  display: none;
}

#site-header-area4 {
  right: 0%;
  height: 100%;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

#site-header-area4 .menu-icon {
  width: 2rem;
}

/* CONFIGURATION 2 //////////////////////////////////// */
@media only screen and (min-width: 360px) {
  #site-header-area1 p {
    display: block;
    font-style: italic;
    font-size: 0.88rem;
  }
}

/* CONFIGURATION 3 /////////////////////// */
@media only screen and (min-width: 600px) {

  header {
    height: 9rem;
  }

  #site-header-area1 {
    width: 100%;
    height: initial;
    top: 12%;
    align-items: center;
    gap: 0.5rem;
  }
  
  #site-header-area2 {
    display: block;
    bottom: 0%;
    width: 100%;
  }
  
  #site-header-area2 ul {
    gap: 3rem;
    display: flex;
    justify-content: space-evenly;
    padding: 0 5rem;
    bottom: -0.1%;
  }

  #site-header-area4 {
    display: none;
  }

  #site-header-area2 li {
    display: flex;
    justify-content: center;
    height: 100%;
  }

  .excluded {
    display: none !important;
  }

  #site-header-area2 a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 0.5rem 0.5rem 0rem 0.5rem;
  }
}

/* CONFIGURATION 4 /////////////////////// */
@media only screen and (min-width: 860px) {

  #site-header-area1 {
    top: 0%;
    width: 35%;
    height: 100%;
    align-items: flex-start;
    gap: 0.7rem;
    padding-left: 1rem;
  }
  
  #site-header-area2 {
    display: block;
    width: initial;
    right: 3%;
  }
  
  #site-header-area2 ul {
    padding: 0;
    align-items: center;
    column-gap: 2rem;
  }

  #site-header-area2 a {
    padding: 0.7rem 0.5rem 0.2rem 0.5rem;
    border: 0.1rem solid var(--color2);
    border-bottom: none;
  }
}

</style>