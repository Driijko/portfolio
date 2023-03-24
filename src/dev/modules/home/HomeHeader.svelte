<!-- SCRIPTS ////////////////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS ---------------------------------------------------
  import { onMount } from "svelte";

  // LIFECYCLE --------------------------------------------------------
  onMount(()=> {
    const tl = gsap.timeline();
    tl.set(".line-group1", {opacity: 1});
    tl.set(".line-group2", {opacity: 1});
    tl.from(".line-group1", {
      delay: 2,
      duration: 7,
      attr: {
        y1: "100%",
        x1: "100%",
      },
      stagger: 0.15,
      strokeWidth: 100,
      ease: "power1.out",
      stroke: "hsla(220, 100%, 100%, 1)",
    }, 0.1);
    tl.from(".line-group2", {
      delay: 2,
      duration: 7,
      attr: {
        y2: "0%",
        x2: "0%",
      },
      stagger: 0.15,
      strokeWidth: 100,
      ease: "power1.out",
      stroke: "hsla(220, 100%, 100%, 1)",
    }, 0);
  });
</script>

<!-- MARKUP ///////////////////////////////////////////////////////// -->
<header>
  <h2>Aesthetically-driven<br/> Web Development</h2>
  <svg id="scroll-indicator" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
  </svg>
  <svg id="animation">
    <circle cx="0%" cy="0%" r="30%" fill="white" />
    <circle cx="100%" cy="100%" r="30%" fill="white" />
    <line class="line-group1" x1="-5%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="0%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="5%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="10%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="15%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="20%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="25%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="30%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="35%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="40%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="45%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="50%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="55%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="60%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="65%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="70%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="75%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="80%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="85%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="90%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="95%" y1="-5%" x2="100%" y2="100%" />
    <line class="line-group1" x1="100%" y1="-5%" x2="100%" y2="100%" />

    <line class="line-group2" x1="0%" y1="0%" x2="105%" y2="105%" />
    <line class="line-group2" x1="0%" y1="0%" x2="100%" y2="105%" />
    <line class="line-group2" x1="0%" y1="0%" x2="90%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="85%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="80%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="75%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="70%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="65%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="60%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="55%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="50%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="45%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="40%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="35%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="30%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="25%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="20%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="15%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="10%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="5%" y2="100%" />
    <line class="line-group2" x1="0%" y1="0%" x2="0%" y2="100%" />
  </svg>
</header>

<!-- STYLES //////////////////////////////////////////////////////////// -->
<style>
  header {
    height: calc(var(--viewport-height) - 7.5rem);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 2rem;
  }
  @keyframes background-fade-in {
    from {background-color: hsla(220, 100%, 10%, 0);}
    to {background-color: hsla(220, 100%, 8%, 0.9);}
  }
  h2{
    font-size: 2rem;
    line-height: 1.5;
    letter-spacing: 0.1rem;
    word-spacing: 0.1rem;
    text-align: center;
    color: var(--color2);
    font-family: "Julius Sans One",sans-serif;
    animation: background-fade-in 5s 8s ease-out forwards;
    width: 100%;
    padding: 1rem 0;
  }
  #animation {
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  line {
    stroke: var(--color1);
    stroke-width: 1vw;
    stroke-linecap: round;
    opacity: 0;
  }

  #scroll-indicator {
    padding: 0.7rem;
    width: 3.5rem;
    color: var(--color2);
    border-radius: 50%;
    animation: background-fade-in 5s 8s ease-out forwards;
  }

  @media screen and (min-width:600px) {
    header {
      height: calc(var(--viewport-height) - 9rem);
    }
    h2 {
      font-size: 3rem;
    }
  }

  @media screen and (min-width: 1280px) {
    line {
      stroke-width: 3vw;
    }
  }
</style>