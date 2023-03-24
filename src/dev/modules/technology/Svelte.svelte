<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  // IMPORT COMPONENTS --------------------------------------------
  import TechnologyListArticle from "./TechnologyListArticle.svelte";

  // IMPORT SCRIPTS --------------------------------------------
  import { fade, fly } from "svelte/transition";

  // PROPS ---------------------------------------------------------
  export let main;

  // LOCAL STATE -----------------------------------------------
  let num = 0;
  let box1 = true;
  let box2 = true;
  let box3 = true;
  let box4 = true;

</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<TechnologyListArticle 
  {main}
  header={"Svelte"}
  link={["https://svelte.dev/", "the Svelte website."]}
>
  <p>
    In the realm of JavaScript frameworks, Svelte is the new arrival, having really only started to gain traction amongst developers following the release of version 3 in 2019. However, Svelte has quickly gained popularity in the front-end developer community thanks to it's innovative, original and intuitive design.
  </p>
  <p>
    Svelte shares several features with React, the JavaScript framework that is currently most widely used. Like React, Svelte is:<br/> 1.) a "single-page application" (SPA) which<br/>2.) allows developers to construct an app using modular components that are<br/>3.) written using HTML-style markup syntax. 
  </p>
  <figure>
    <img src="./technology/svelte-pic1.webp" alt="Svelte code demonstrating JSX-style markup." />
    <figcaption>
      In Svelte, we can easily structure custom components and HTML elements hierarchically in much the same fashion as regular HTML.
    </figcaption>
  </figure>
  <p>
    One distinctive aspect of Svelte is that svelte components include JavaScript, markup, and CSS all in the same component. This means that styling components is by default integrated into the modular design. Furthermore, any CSS written in a component is scoped exclusively to that component, helping the developer avoid complications of that CSS over-writing, or being overwritten by, other CSS.
  </p>
  <figure>
    <img src="./technology/svelte-pic2.webp" alt="Svelte component file demonstrating the inclusion of JavaScript, markup and CSS styles all in one component." />
    <figcaption>
      This loading-screen component demonstrates the inclusion of JavaScript, markup, and CSS styling all in one component. All the CSS written here will only apply within the component, allowing, for example, the developer to re-use the class name "animation" for other elements in other components without creating competing CSS rules.
    </figcaption>
  </figure>
  <p>
    Another distinctive aspect of Svelte is that it deviates very little from writing vanilla HTML, CSS and JavaScript. Svelte includes a number of unique features the developer must learn, but with a much smaller learning curve compared to other frameworks. This aspect has quickly established Svelte as the most accessible front-end framework.
  </p>
  <p>
    Perhaps the most signficant feature of Svelte is how it approaches development of an app versus production of that app. While a framework like React must ship the core React code with an app so that that code can run in the background of the app to interpret and respond appropriately to React code, Svelte takes developer code and compiles that code to highly optimized vanilla HTML, CSS and JavaScript for the production version. This enhances performance of an app since Svelte doesn't need to run in the background, nor is their need for a distinction between a virtual DOM and the actual DOM, as in React. Furthermore Svelte apps can ship with a minimum of small files. These factors, along with Svelte's SPA design, allow Svelte apps to be highly performant.
  </p>
  <p>
    Svelte features logic blocks within markup that greatly facilitate creating HTML in programmatic and data-driven ways. If-blocks  allow for conditional rendering of elements or components, while as each-blocks allow iterative rendering based on an array or array-like data-structure.
  </p>
  <figure>
    <img src="./technology/svelte-pic3.webp" alt="Svelte code demonstrating conditional rendering." />
    <figcaption>
      If-blocks allow us to render markup if a condition is fulfilled. Here conditional rendering is used to determine which page of a website is rendered.
    </figcaption>
  </figure>
  <br/>
  <figure>
    <img src="./technology/svelte-pic4.webp" alt="Svelte code demonstrating iterative rendering." />
    <img src="./technology/svelte-pic5.webp" alt="The results of an interative rendering." />
    <figcaption>
      Each-blocks allow us to iterate over an array-like structure to render multiple elements. Here we use iterative rendering to construct a list.
    </figcaption>
  </figure>
  <p>
    Bindings make it easy to connect variables and data-structures with HTML elements and custom components. This is particularly useful with form elements where user interactions with the elements typically should update data. Binding the value of a form element to a variable means that a one-to-one relationship is created. If the variable is updated by code, the form element's value will reflect this. If the form element's value is updated by the user, the variable will reflect this.
  </p>
  <figure>
    <img src="./technology/svelte-pic6.webp" alt="Svelte code demonstrating binding." />
    <div>
      <input type="range" bind:value={num} min="0" max="100"/><br/>
      <p>The number is:<br/> {num}</p>
    </div>
    <figcaption>
      In this example, the value of a range input is bound to a variable called "num". The range input is set to vary between 0 and 100, and the value of the variable is rendered in a paragraph below the input element.
    </figcaption>
  </figure>
  <p>
    Svelte transitions provide tools for animating the addition and removal of components from the DOM. Rather than components simply appearing or disappearing, Svelte transitions animate the entrance and exits of components. 
  </p>
  <figure>
    <img src="./technology/svelte-pic7.webp" alt="Svelte code demonstrating the transition directive." />
    <div id="checklist">
      <div class="checklist-item">
        <input type="checkbox" bind:checked={box1} /><br/>
          <svg viewBox="0 0 512 512">
            {#if box1}
              <path transition:fade d="M288 192h17.1c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4v4 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V339.2L248 448h56c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-53 0-96-43-96-96V192.5c0-16.1-12-29.8-28-31.8l-7.9-1C10.5 157.6-1.9 141.6 .2 124s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3v85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5v0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32h0c-3.7-4.1-7-8.5-9.9-13.2C325.3 164 320 146.6 320 128v0V32 12 10.7C320 4.8 324.7 .1 330.6 0h.2c3.3 0 6.4 1.6 8.4 4.2l0 .1L352 21.3l27.2 36.3L384 64h64l4.8-6.4L480 21.3 492.8 4.3l0-.1c2-2.6 5.1-4.2 8.4-4.2h.2C507.3 .1 512 4.8 512 10.7V12 32v96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM400 128c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16zm48 16c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16z"/>
            {/if}
          </svg>
      </div>
      <div class="checklist-item">
        <input type="checkbox" bind:checked={box2} /><br/>
        <svg  viewBox="0 0 576 512">
          {#if box2}
            <path transition:fade d="M368 32c41.7 0 75.9 31.8 79.7 72.5l85.6 26.3c25.4 7.8 42.8 31.3 42.8 57.9c0 21.8-11.7 41.9-30.7 52.7L400.8 323.5 493.3 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H480c-8.5 0-16.6-3.4-22.6-9.4L346.9 360.2c11.7-36 3.2-77.1-25.4-105.7c-40.6-40.6-106.3-40.6-146.9-.1L101 324.4c-6.4 6.1-6.7 16.2-.6 22.6s16.2 6.6 22.6 .6l73.8-70.2 .1-.1 .1-.1c3.5-3.5 7.3-6.6 11.3-9.2c27.9-18.5 65.9-15.4 90.5 9.2c24.7 24.7 27.7 62.9 9 90.9c-2.6 3.8-5.6 7.5-9 10.9L261.8 416H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-35.3 0-64-28.7-64-64C0 249.6 127 112.9 289.3 97.5C296.2 60.2 328.8 32 368 32zm0 104c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24z"/>
          {/if}
        </svg>
      </div>
      <div class="checklist-item">
        <input type="checkbox" bind:checked={box3} /><br/>
        <svg viewBox="0 0 512 512">
          {#if box3}
          <path transition:fade d="M160.8 96.5c14 17 31 30.9 49.5 42.2c25.9 15.8 53.7 25.9 77.7 31.6V138.8C265.8 108.5 250 71.5 248.6 28c-.4-11.3-7.5-21.5-18.4-24.4c-7.6-2-15.8-.2-21 5.8c-13.3 15.4-32.7 44.6-48.4 87.2zM320 144v30.6l0 0v1.3l0 0 0 32.1c-60.8-5.1-185-43.8-219.3-157.2C97.4 40 87.9 32 76.6 32c-7.9 0-15.3 3.9-18.8 11C46.8 65.9 32 112.1 32 176c0 116.9 80.1 180.5 118.4 202.8L11.8 416.6C6.7 418 2.6 421.8 .9 426.8s-.8 10.6 2.3 14.8C21.7 466.2 77.3 512 160 512c3.6 0 7.2-1.2 10-3.5L245.6 448H320c88.4 0 160-71.6 160-160V128l29.9-44.9c1.3-2 2.1-4.4 2.1-6.8c0-6.8-5.5-12.3-12.3-12.3H400c-44.2 0-80 35.8-80 80zm80 16c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16z"/>
          {/if}
        </svg>
      </div>
      <div class="checklist-item" >
        <input type="checkbox" bind:checked={box4} /><br/>
        <svg viewBox="0 0 576 512">
          {#if box4}
          <path transition:fade d="M448 238.1V160h16l9.8 19.6c12.5 25.1 42.2 36.4 68.3 26c20.5-8.2 33.9-28 33.9-50.1V80c0-19.1-8.4-36.3-21.7-48H560c8.8 0 16-7.2 16-16s-7.2-16-16-16H480 448C377.3 0 320 57.3 320 128H224 203.2 148.8c-30.7 0-57.6 16.3-72.5 40.8C33.2 174.5 0 211.4 0 256v56c0 13.3 10.7 24 24 24s24-10.7 24-24V256c0-13.4 6.6-25.2 16.7-32.5c1.6 13 6.3 25.4 13.6 36.4l28.2 42.4c8.3 12.4 6.4 28.7-1.2 41.6c-16.5 28-20.6 62.2-10 93.9l17.5 52.4c4.4 13.1 16.6 21.9 30.4 21.9h33.7c21.8 0 37.3-21.4 30.4-42.1l-20.8-62.5c-2.1-6.4-.5-13.4 4.3-18.2l12.7-12.7c13.2-13.2 20.6-31.1 20.6-49.7c0-2.3-.1-4.6-.3-6.9l84 24c4.1 1.2 8.2 2.1 12.3 2.8V480c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V315.7c19.2-19.2 31.5-45.7 32-75.7h0v-1.9zM496 96c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16z"/>
          {/if}
        </svg>
      </div>
    </div>
    <figcaption>
      Here we construct a series of checkboxes and svg images. The value of each checkbox is tied to an array value, which in turn conditionally renders the associated svg image. Lastly, we use the Svelte transition "fade" to make the removal and insertion of the SVG image animated.
    </figcaption>
  </figure>
  <p>
    Svelte has a variety of other features to ease the developer experience, and is still very much in the process of being updated and refined. Because Svelte is a newer framework, it doesn't have as robust of a library eco-system built around it as the more established React framework. But the popularity of Svelte is helping to build that eco-system. At the time of writing, a back-end framework, Svelte-Kit, is nearing a production-ready level. Svelte-Kit is the back-end framework meant to compliment Svelte's front-end framework. Svelte-Kit includes the feature of Server-Side-Rendering (SSR) which improves both search-engine optmization (SEO), as well as page load performance. Svelte-Kit also includes routing design, allowing the user's browser's address bar to be updated by page transitions, and allowing for multiple points of entry to a website, problems that SPAs don't handle on their own.
  </p>
  <p>
    The future for Svelte and the Svelte eco-system look extremely promising. Svelte is remarkably different from other front-end frameworks, and set's a high bar with it's intuitive design, advanced modularity, and high-performance.
  </p>
</TechnologyListArticle>

<style>
  div p {
    text-align: center;
  }
  #checklist {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 2rem;
  }
  .checklist-item {
    display: flex;
    align-items: center;
    column-gap: 3rem;

  }
  .checklist-item svg {
    width: 4rem;
  }
</style>