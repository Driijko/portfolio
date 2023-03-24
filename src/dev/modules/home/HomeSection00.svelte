<!-- MARKUP /////////////////////////////////////////////// -->
<section>
  <svg viewBox="0 0 100 100" preserveAspectRatio="none">
    <polygon class="portrait" points="50 0 100 20 100 0" />
    <polygon class="portrait" points="0 80 50 100 0 100" />
    <polygon class="landscape" points="0 30 49.9 0 49.9 100 0 70" />
  </svg>
  <div id="top-text">
    <h3>Introduction:</h3>
    <p>Hello, my name is <em>Andrij Radio</em>,<br/> but my friends call me: <span id="name">Dreeko</span></p>
  </div>
  <img src="./home/pic0.webp" alt="Web-developer Dreeko."/>
  <p id="skills">I'm a <em>front-end web-developer </em><br class="portrait"/>and <em>designer</em>. </p>
</section>


<!-- STYLES ////////////////////////////////////////////////// -->
<style>
  section {
    position: relative;
    height: var(--viewport-height);
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1rem;
  }
  svg {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  polygon {
    fill: var(--color1);
  }
  #top-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 0.5rem;
    padding-left: 0.5rem;
  }
  h3 {
    font-size: 1.3em;
    text-decoration: underline;
  }
  p {
    word-spacing: 0.1em;
  }
  #top-text p {
    line-height: 1.5;
  }
  #name {
    font-family: "Julius Sans One", sans-serif;
    font-weight: bold;
    font-size: 1.5em;
    text-align: center;
    margin-left: 0.1em;
  }
  #skills {
    padding-top: 0.3em;
    padding-right: 0.5em;
    line-height: 1.5;
    text-align: right;
  }

  @media screen and (orientation: portrait) and (min-width: 600px) {
    section {
      font-size: 1.5rem;
    }
  }

  @media screen and (orientation: portrait) {
    img {
      background-color: var(--color1-3);
      max-height: 70%;
    }
  }

  @media screen and (orientation: landscape) {
    img {
      position: absolute;
      right: 0;
      height: 100%;
      max-width: 50%;
      background-color: var(--color1);
      padding: 2em;
    }
    #top-text {
      position: relative;
      color: var(--color2);
      padding-left: 5em;
    }
    #skills {
      text-align: left;
      padding-left: 5em;
      line-height: 2;
      color: var(--color2);
      position: relative;
    }
  }

</style>