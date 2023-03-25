<!-- SCRIPTS /////////////////////////////////////////////////////////// -->
<script>
  // IMPORT STORES ------------------------------------------------
  import {modals} from "../stores/page.js";
  import { currentPageName, pageExit } from "../stores/site.js";
</script>

<!-- MARKUP ///////////////////////////////////////////////////////// -->
<dialog id="site-menu-modal" class="covering-modal" open={$modals.siteMenu}>

  <div on:click={()=> modals.close("siteMenu")} class="site-menu-modal-closer background"></div>

  <div class="container">
    <section id="site-menu">

      <h3 id="site-menu-area1">Menu</h3>

      <nav id="site-menu-area4">
        <ul>
          <li class:excluded={$currentPageName === "home"} >
            <a href={null} 
              class="interface-style3 center"
              on:click|preventDefault={()=> pageExit("home", ()=> modals.close("siteMenu"))}
            >Home</a>
          </li>
          <li class:excluded={$currentPageName === "portfolio"}>
            <a href={null} 
              class="interface-style3 center"
              on:click|preventDefault={()=> pageExit("portfolio", ()=> modals.close("siteMenu"))}
            >Portfolio</a>
          </li>
          <li class:excluded={$currentPageName === "technology"}>
            <a href={null} 
              class="interface-style3 center"
              on:click|preventDefault={()=> pageExit("technology", ()=> modals.close("siteMenu"))}
            >Technology</a>
          </li>
          <li class:excluded={$currentPageName === "cv"}>
            <a href={null} 
              class="interface-style3 center"
              on:click|preventDefault={()=> pageExit("cv", ()=> modals.close("siteMenu"))}
            >CV</a>
          </li>
          <li class:excluded={$currentPageName === "about"}>
            <a href={null} 
              class="interface-style3 center"
              on:click|preventDefault={()=> pageExit("about", ()=> modals.close("siteMenu"))}
            >About</a>
          </li>
        </ul>
      </nav>

      <button id="site-menu-area6" on:click={()=> modals.close("siteMenu")} class="modal-closer-button interface-style4" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <title>Close pop up</title>
          <path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"/></svg>
      </button>

    </section>
  </div>
</dialog>

<!-- STYLE /////////////////////////////////////////////////////////////// -->
<style>
#site-menu {
  width: 320px;
  height: 480px;
  border: 0.2rem solid var(--color2);
  background-color: var(--color1);
  color: var(--color2);
  border-radius: 0.5rem;
}

#site-menu-area1 {
  font-size: 2rem;
  height: 8.3%;
  border-bottom: 0.2rem solid var(--color2);
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
} 

#site-menu-area4 {
  height: 91.7%;
}

#site-menu-area4 ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3.2% 0;
  height: 100%;
}

#site-menu-area4 li {
  height: 15.6%;
}

#site-menu-area4 li a {
  height: 100%;
  min-height: 0;
  font-size: 1.7rem;
}

#site-menu-area6 {
  min-height: 0;
  height: 8.3%;
  border: none;
  border-left: 0.2rem solid var(--color2);
}

.excluded {
  display: none;
}


@media only screen and (min-width: 600px) {
  #site-menu {
    width: 416px;
    height: 624px;
  }
}
</style>