<!-- SCRIPTS ///////////////////////////////////////////////////////// -->
<script>
  import {pageExit} from "../../stores/site.js";
</script>

<!-- MARKUP ////////////////////////////////////////////////////// -->
<div id="container">
  <div id="sub-container1">
    <h2>About Me</h2>
    <figure>
      <img src="./about/pic0.webp" alt="Web developer Andrij Radio, AKA: Dreeko." />
      <figcaption>Andrij Radio, <br class="landscape"/><span>aka:</span> Dreeko.</figcaption>
    </figure>
  </div>
  <div id="sub-container2">
    <p>I'm a freelance web developer living in Toronto, Canada.</p>
    <p>I'm obsessed with aesthetics and animation. My desire is that when someone comes to one of my websites, their first impression is "wow". Understanding both technology and design allows me to craft unique experiences that help my client's websites stand out. I'm inspired by cutting-edge web design, fine art, and even videogames.</p>
    <p>
      At the same time, presenting information in a way that is clear and easy to navigate is fundamental to good design. My work is about finding a balance between a bold sense of style and providing clarity and ease of use for the user. When these two approaches are properly balanced, the result is to create an immersive, dynamic and satisfying experience: user flow. Check out my <a class="interface-style7" href={null} on:click|preventDefault={()=> pageExit("portfolio")} >portfolio</a> for examples. My goal is always to give someone visiting one of my client's websites an experience they won't soon forget. 
    </p>
    <p>
      Besides programming and web development, music has been a major focus throughout my life. I've played in several bands in Edmonton, Montreal and Toronto, and toured and recorded. I've DJed at clubs, bars and parties, and I also co-hosted a radio show about music from Africa and the African diaspora. These days I'm mostly focused on playing classical music and writing ambient electronic music.
    </p>
  </div>
</div>

<!-- STYLES //////////////////////////////////////////////////////// -->
<style>
  #container {
    position: relative;
    opacity: 0;
    animation: fade-in 2s 1s ease-in forwards;
  }
  h2 {
    position: absolute;
    left: 3%;
    top: 1%;
    font-size: 2em;
  }
  figure {
    border: 0.3em solid var(--color1);
    display: flex; 
    flex-direction: column;
  }
  figcaption {
    border-top: 0.3em solid var(--color1);
    padding: 1%;
    font-size: 1.3em;
    text-align: center;
    font-weight: bold;
  }
  span {
    font-weight: 400;
  }
  p {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    padding: 1em;
    line-height: 1.3;
  }
  @media screen and (orientation:landscape) {
    #container {
      display: flex;
    }
    h2 {
      position: initial;
      padding-left: 3%;
      text-align: center;
    }
    #sub-container1 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: var(--color1);
      color: var(--color2);
      gap: 1em;
      padding: 5% 0%;
      width: 100em;
    }
    #sub-container2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1em;
    }
  }
</style>