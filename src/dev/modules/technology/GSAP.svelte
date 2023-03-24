<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
// @ts-nocheck

  // IMPORT SCRIPTS ------------------------------------------------
  import { onMount } from "svelte";

  // IMPORT COMPONENTS --------------------------------------------
  import TechnologyListArticle from "./TechnologyListArticle.svelte";

  // PROPS ---------------------------------------------------------
  export let main;

  // LOCAL STATE ----------------------------------------------
  let clickReady = true;

  // EVENT HANDLERS ----------------------------------------------
  function rotate(ease) {
    if (clickReady) {
      clickReady = false;
      const tl = gsap.timeline();
      tl.to("#rect", {
        duration: 3,
        rotate: 720,
        ease: ease,
      });
      tl.to("#rect", {
        rotate: 0,
        duration: 0,
      });
    }
    const timerId = setTimeout(()=> {
      clickReady = true;
      clearTimeout(timerId);
    }, 3000);
  }

  // LIFECYCLE -----------------------------------------------------
  onMount(()=> {
    gsap.to("#animation1", {
      duration: 5,
      repeat: -1,
      backgroundColor: "hsl(0, 100%, 80%)",
      yoyo: true,
      ease: "linear",
      scaleX: 2.5,
      scaleY: 0.1,
      rotateY: 360,
      borderRadius: "50%",
    });
    gsap.to("#animation2 path", {
      duration: 5,
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.5,
      ease: "slow(0.7, 0.7, false)",
      attr: {
        d: "M 0 0 Q 0 200 1000 500 Q 500 1000 200 500 Q 500 0 1000 500 Q 0 800 0 1000 Z",
      },
      strokeDasharray: "5 50",
    });
    gsap.to("#animation3 circle", {
      duration: 3,
      fill: "hsl(50, 100%, 80%)",
      stagger: 0.2,
      yoyo: true,
      repeat: -1,
      scale: 2,
    });
    const tl = gsap.timeline({repeat: -1});
    tl.to("#animation4 circle", {
      duration: 3,
      ease: "bounce",
      attr: {
        cy: 900,
      },
    });
    tl.to("#animation4 circle", {
      duration: 3,
      ease: "bounce",
      attr: {
        cx: 950,
      },
    });
    tl.to("#animation4 circle", {
      duration: 3,
      ease: "steps(20)",
      strokeDasharray: "50 100",
      strokeWidth: 100,
      attr: {
        r: 500,
        cx: 500,
        cy: 500,
      },
    });
    tl.to("#animation4 circle", {
      duration: 3,
      ease: "steps(20)",
      attr: {
        r: 50,
        cx: 100,
        cy: 100,
      }
    });
  });

</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<TechnologyListArticle 
  {main}
  header={"GSAP3"}
  subHeader={"Green Sock Animation Platform 3"}
  link={["https://greensock.com/", "the Green Sock website."]}
>
  <p>
    GSAP is a widely-used JavaScript animation library that has been around for over a decade. GSAP3 is the most recent version at the time of writing.
  </p>
  <p>
    GSAP is designed to help front-end developers seeking complex, intricate animations. Typically, the easiest way for a front-end developer to construct animations is within CSS, but the animation toolkit within CSS, while simple to understand and use, tends to quickly become cumbersome once animations reach a certain level of complexity.
  </p>
  <p>
    GSAP allows the developer to design animations within JavaScript, making it easy to access variables, data-structures, conditional logic flow and other aspects of JavaScript. This in turn can aid in integrating animations with other parts of a website's design.
  </p>
  <figure>
    <img src="./technology/gsap-pic1.webp" alt="Code demonstrating how to create a simple animation using GSAP." />
    <div id="animation1"></div>
    <figcaption>
      Here we see a simple animation in which GSAP is used to alter the color, size, shape and rotation of an HTML element. We can repeat an animation indefinitely using a value of "-1" for the "repeat" property, and cause the animation to reverse itself using the "yoyo" property.
    </figcaption>
  </figure>
  <p>
    One of GSAP's most distinguishing features is it's ability to work well with SVGs. Since SVGs are a very powerful and responsive-design-friendly way to draw in the browser, this aspect of GSAP is extremely helpful. But GSAP can also work with regular HTML elements, as well as with the HTML canvas, or with 3D WebGL objects.
  </p>
  <figure>
    <img src="./technology/gsap-pic2.webp" alt="Code showing how an SVG path is specified prior to being animated." />
    <img src="./technology/gsap-pic3.webp" alt="Code demonstrating the application of GSAP to manipulating SVGs" />
    <svg id="animation2" viewBox="0 0 1000 1000">
      <path d="M 0 0
        Q 1000 500 0 1000
      Z"/>
    </svg>
    <figcaption>
      GSAP can be used to manipulate SVG paths, creating fluid, curving animations. This code also alters the characteristics of the path's stroke.
    </figcaption>
  </figure>
  <p>
    GSAP also helps to optimize performance (an important factor in animation), and ensure cross-browser compatability.
  </p>
  <p>
    Custom eases allow the developer to refine the timing of an animation to just the right pattern.
  </p>
  <figure>
    <div id="area1">
      <div id="rect"></div>
      <div id="area2">
        <button on:click={()=> rotate("power1.in")} type="button">ease-in</button>
        <button on:click={()=> rotate("power1.out")} type="button">ease-out</button>
        <button on:click={()=> rotate("elastic")} type="button">elastic</button>
        <button on:click={()=> rotate("bounce")} type="button">bounce</button>
        <button on:click={()=> rotate("steps(12)")} type="button">steps</button>
      </div>
    </div>
    <figcaption>
      Here we have five examples of eases. Eases determine the speed and acceleration of an animation. In this case, the eases are applied to a simple rotation animation.
    </figcaption>
  </figure>
  <p>
    Staggers make animating multiple objects in a harmonious, synchronized way easy to do.
  </p>
  <figure>
    <img src="./technology/gsap-pic4.webp" alt="Code demonstrating the ability of GSAP to stagger animations applied to multiple elements." />
    <svg id="animation3" viewBox="0 0 1000 200">
      <circle cx="50" cy="50" r="50" />
      <circle cx="150" cy="50" r="50" />
      <circle cx="250" cy="50" r="50" />
      <circle cx="350" cy="50" r="50" />
      <circle cx="450" cy="50" r="50" />
      <circle cx="550" cy="50" r="50" />
      <circle cx="650" cy="50" r="50" />
      <circle cx="750" cy="50" r="50" />
      <circle cx="850" cy="50" r="50" />
      <circle cx="950" cy="50" r="50" />
    </svg>
    <figcaption>
      Staggers allow us to apply an animation to a group of elements with a time offset applied progressively to each element. 
    </figcaption>
  </figure>
  <p>
    Timelines give developers exact control over the timing of multiple, inter-related animations, such that they can be coordinated into a larger, emergent animation.
  </p>
  <figure>
    <img src="./technology/gsap-pic5.webp" alt="GSAP code demonstrating how to organize an animation into a timeline." />
    <svg id="animation4" viewBox="0 0 1000 1000" >
      <circle cx="100" cy="100" r="50" />
    </svg>
    <figcaption>
      Timeline's are one of GSAP's most powerful and valuable features, allowing the developer to organize and align multiple animations into a larger sequence.
    </figcaption>
  </figure>
  <p>
    GSAPs versatility, high performance and established reputation have led to it being widely adopted. It's consistently updated with new features, including adaptations to frameworks like React and Vue.
  </p>
</TechnologyListArticle>

<!-- STYLES ///////////////////////////////////////////// -->
<style>
  #animation1 {
    background-color: hsl(0, 100%, 10%);
    width: 50%;
    height: 4rem;
  }
  #animation2 {
    width: 100%;
    max-width: 1000px;
  }
  #animation2 path {
    fill: var(--color1-1);
    stroke: var(--color2-1);
    stroke-width: 10;
    stroke-linecap: round;
    stroke-dasharray: 10 10;
  }
  #area1 {
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;
  }
  #area1 div:nth-of-type(1) {
    width: 5rem;
    height: 5rem;
    background-color: red;
  }
  #area2 {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    row-gap: 0.5rem;
  }
  #area2 button {
    background-color: var(--color2);
    width: 80%;
    border-radius: 0.3rem;
    color: var(--color1);
    max-width: 6rem;
  }
  #animation3, #animation4 {
    width: 100%;
  }
  #animation3 circle {
    fill: var(--color1-1);
    stroke: var(--color1);
    stroke-width: 10;
  }
  #animation4 circle {
    fill: var(--color2);
    stroke: var(--color1-1);
    stroke-width: 10;
    stroke-dasharray: 0 0;
    stroke-linecap: round;
  }
</style>