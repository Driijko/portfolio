<!-- SCRIPTS /////////////////////////////////////////////////////// -->
<script>
  // PROPS -----------------------------------------------------------
  export let logoData;
  export let genericDescriptor;
  export let date;
  export let siteAddress;
  export let pictureData;
  export let description;
  export let technologies = ["HTML", "CSS", "JavaScript"];
  export let order = "normal";

  // DEVICE STATE -------------------------------------------------------
  let viewportOrientation = window.innerWidth >= window.innerHeight ? "landscape" : "portrait";
  // LOCAL STATE -----------------------------------------------------
  let area2Hidden = viewportOrientation === "landscape" ? false : true;
  let hiddenSubArea = 2;

</script>

<!-- MARKUP /////////////////////////////////////////////////// -->
<section id="portfolio-item">

  <div id="area1" class:switch={order === "switch" && viewportOrientation === "landscape"}>
    <div>
      <h3 aria-label={logoData[1]}>
        <img id="logo" 
          src={logoData[0]} 
          alt={logoData[1]}
        />
      </h3>
      <p id="descriptor-and-date">
        <span id="generic-descriptor">{@html genericDescriptor}</span><br/>
        <span id="date">{date}</span>
      </p>
    </div>
    {#if viewportOrientation === "portrait"}
      <button type="button" 
        on:click={()=> area2Hidden = false}
        class="interface-style6"
      >Learn More</button>
    {/if}
    <a href={siteAddress} 
      target="_blank"
      rel="noreferrer noopener"
    >Visit Site</a>
  </div>

  <div id="area2" class:hidden={area2Hidden} class:switch={order === "switch" && viewportOrientation === "landscape"}>

    <div id="sub-area1"
      class:hidden={viewportOrientation === "portrait" && hiddenSubArea === 1}
    >
      <p id="preview" class:hidden={viewportOrientation === "landscape"}>
        Preview
      </p>
      <img id="site-pic" 
        src={viewportOrientation === "portrait" ? pictureData[0] : pictureData[1]} 
        alt={pictureData[2]} 
      />
      <button class="portrait-nav-button" type="button"
        on:click={()=> hiddenSubArea = 1}
        class:hidden={viewportOrientation === "landscape"}
      >Next &gt; </button>
    </div>

    <div id="sub-area2"
      class:hidden={viewportOrientation === "portrait" && hiddenSubArea === 2}
    >
      <svg id="decor1" class="decors" viewBox="0 0 512 512" class:hidden={viewportOrientation === "landscape" || window.innerHeight < 700}><path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"/></svg>
      <p id="description">{@html description}</p>
      <section id="technology-section">
        <h4>Technologies</h4>
        <ul>
          {#each technologies as technology}
            <li>{technology}</li>
          {/each}
        </ul>
      </section>
      <button type="button" class="portrait-nav-button"
        on:click={()=> hiddenSubArea = 2}
        class:hidden={viewportOrientation === "landscape"}
      > &lt; Back </button>
      <svg id="decor2" class="decors" viewBox="0 0 512 512" class:hidden={viewportOrientation === "landscape" || window.innerHeight < 700}><path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"/></svg>
    </div>

    <button id="exit-button" type="button" 
      class:hidden={viewportOrientation === "landscape"}
      on:click={()=> {area2Hidden = true; hiddenSubArea = 2;}}
    >X</button>

  </div>
</section>

<!-- STYLES //////////////////////////////////////////////////////// -->
<style>
  #portfolio-item {
    height: var(--viewport-height);
    position: relative;
  }
  button, a {
    display: block;
  }
  .hidden {
    display: none !important;
  }
  #area1, #area2 div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #area1 {
    row-gap: 1.5rem;
    text-align: center;
    background-color: var(--color1);
    color: var(--color1-2);
  }
  h3 {
    margin-bottom: 2rem;
  }
  #logo {
    width: 90%;
    max-height: 35vh;
  }
  #descriptor-and-date {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    line-height: 2;
  }
  #generic-descriptor {
    font-size: 1.5rem;
    line-height: 1.3
  }
  #date {
    font-size: 1.2rem;
  }
  #area1 button, #area1 a {
    font-size: 1.3rem;
    background-color: var(--color1-2);
    color: var(--color2);
    border-radius: 0.3rem;
    padding: 0.3rem;
    width: 8rem;
  }
  #area1 a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.7rem;
  }
  #area2 button {
    font-weight: bold;
    font-size: 1.3rem;
  }
  #sub-area1 {
    row-gap: 1rem;
  }
  #sub-area2 {
    row-gap: 5vh;
  }
  #description {
    padding: 0 5vw;
    max-width: 70ch;
    line-height: 1.5;
    word-spacing: 0.1rem;
  }
  #technology-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    row-gap: 1rem;
  }
  h4 {
    font-size: 1.2rem;
  }
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 3rem;
    row-gap: 1rem;
    padding: 0 1rem;
  }
  #exit-button {
    position: absolute;
    border: 0.2rem solid var(--color1);
    right: 0;
    font-size: 1.5rem;
    font-weight: bold;
    width: 2.5rem;
    height: 2.5rem;
  }
  @media screen and (orientation: portrait) {
    div {
      width: 100%;
    }
    #area1, #area2 div {
      height: 100%;
    }
    #area2 {
      position: absolute;
      left: 0;
      top: 0;
    }
    #area2 div {
      padding-top: 3rem;
      position: absolute;
      height: var(--viewport-height);
      top: 0;
      left: 0;
      background-color: var(--color2);
    }
    #exit-button {
      color: var(--color2);
      background-color: var(--color1);
      border-radius: 0 0 0 0.3rem;
    }
    .portrait-nav-button {
      background-color: var(--color1);
      border-radius: 0.3rem;
      color: var(--color2);
      padding: 0.2rem 0.5rem;
    }
    #preview {
      position: absolute;
      top: 0;
      left: 0;
      font-family: "Montserrat", sans-serif;
      padding: 1rem;
      font-size: 2rem;
      font-weight: bold;
    }
    #site-pic {
      width: 100%;
      height: 85%;
      background-color: var(--color2-2);
      border-top: 0.5rem solid var(--color1);
      border-bottom: 0.5rem solid var(--color1);
    }
    #sub-area2 {
      background-color: var(--color2);
    }
    #description {
      font-size: 1rem;
    }
    .decors {
      position: absolute;
      height: 8vh;
      width: 100%;
      color: var(--color2-2);
    }
    #decor1 {
      top: 8%;
    }
    #decor2 {
      bottom: 5%;
      transform: rotate(180deg);
    }
  }
  @media screen and (orientation: portrait) and (min-width: 600px) {
    h4 {
      font-size: 2rem;
    }
    #description, ul, #area2 button {
      font-size: 1.4rem;
    }
  }
  @media screen and (orientation: portrait) and (min-width: 768px) {
    #description {
      width: 85%;
    }
  }
  @media screen and (orientation: landscape) {
    #portfolio-item {
      display: flex;
      padding: 1rem;
      align-items: center;
      justify-content: space-evenly;
      background-color: var(--color1);
    }
    #area1, #area2 {
      border-radius: 0.3rem;
    }
    #area1.switch {
      order: 2;
    }
    #area2.switch {
      order: 1;
    }
    #area1 {
      width: 30%;
      height: 100%;
      background-color: var(--color1-1);
      color: var(--color1-2);
    }
    #area1 a {
      color: var(--color1);
      transition: color 0.5s ease-out;
      font-size: 1.2rem;
      width: 6rem;
      height: 2.5rem;
    }
    #area1 a:hover, #area1 a:focus {
      color: var(--color2);
    }
    #generic-descriptor {
      font-size: 1.3rem;
    }
    #date {
      font-size: 1rem;
    }
    #area2 {
      width: 60%;
      height: 100%;
      border: 0.1rem solid var(--color2);
    }
    #sub-area1 {
      height: 60%;
    }
    #site-pic {
      height: 100%;
    }
    #sub-area2 {
      height: 40%;
      row-gap: 1rem;
      background-color: var(--color2);
    }
    #description {
      font-size: 0.8rem;
    }
  }
  @media screen and (orientation: landscape) and (min-height: 1000px) {
    #description {
      font-size: 1rem;
    }
    #sub-area2 {
      row-gap: 2rem;
    }
  }
</style>