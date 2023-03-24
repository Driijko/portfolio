<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  // IMPORT COMPONENTS --------------------------------------------
  import TechnologyListArticle from "./TechnologyListArticle.svelte";

  // PROPS ---------------------------------------------------------
  export let main;

</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<TechnologyListArticle 
  {main}
  header={"SVG"}
  subHeader={"Scalable Vector Graphics"}
  link={["https://developer.mozilla.org/en-US/docs/Web/SVG", "MDN"]}
>
  <p>
    SVG is a markup language, originally created in 1999, for creating drawings. It includes a number of features to assist the creation of graphics, such as drawing simple shapes, curving lines, color gradients, or patterns, as well as altering graphics by applying transformations or filters to them.
  </p>
  <p>
    One of the important features of SVGs are that they are "scalable", that is, SVGs can be made larger or smaller with no corresponding diminishment in quality. In comparison, bit-map images, such as PNGs or JPEGs, lose their fidelity if blown up to larger proportions than the original image. This is because bit-map images specifiy the look of an image pixel by pixel. In comparison, SVGs outline a way to draw an image mathematically, and this mathematical pattern can than be easily scaled up or down. This makes SVGs ideal for front-end web development where users access websites on a variety of different devices with different sizes of screen. SVGs can rescale themselves to look just as good on a tiny mobile screen as on a 4K monitor. For this reason, SVGs have become the default format for creating icons on the web, and their role in web graphics is steadily growing.
  </p>
  <figure>
    <div id="container1" class="container">
      <svg viewBox="0 0 640 512">
        <path d="M181.5 197.1l12.9 6.4c5.9 3 12.4 4.5 19.1 4.5c23.5 0 42.6-19.1 42.6-42.6V144c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v21.4c0 23.5 19.1 42.6 42.6 42.6c6.6 0 13.1-1.5 19.1-4.5l12.9-6.4 8.4-4.2L135.1 185c-4.5-3-7.1-8-7.1-13.3V168c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v3.7c0 5.3-2.7 10.3-7.1 13.3l-11.8 7.9 8.4 4.2zm-8.6 49.4L160 240l-12.9 6.4c-12.6 6.3-26.5 9.6-40.5 9.6c-3.6 0-7.1-.2-10.6-.6v.6c0 35.3 28.7 64 64 64h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V336 320c0-23.7 12.9-44.4 32-55.4c9.4-5.4 20.3-8.6 32-8.6V240c0-26.5 21.5-48 48-48c8.8 0 16 7.2 16 16v32 16 48c0 8.8 7.2 16 16 16s16-7.2 16-16V204.3c0-48.2-30.8-91-76.6-106.3l-8.5-2.8c-8-2.7-12.6-11.1-10.4-19.3s10.3-13.2 18.6-11.6l19.9 4C576 86.1 640 164.2 640 254.9l0 1.1h0c0 123.7-100.3 224-224 224h-1.1H256h-.6C132 480 32 380 32 256.6V256 216.8c-10.1-14.6-16-32.3-16-51.4V144l0-1.4C6.7 139.3 0 130.5 0 120c0-13.3 10.7-24 24-24h2.8C44.8 58.2 83.3 32 128 32h64c44.7 0 83.2 26.2 101.2 64H296c13.3 0 24 10.7 24 24c0 10.5-6.7 19.3-16 22.6l0 1.4v21.4c0 1.4 0 2.8-.1 4.3c12-6.2 25.7-9.6 40.1-9.6h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-13.3 0-24 10.7-24 24v8h56.4c-15.2 17-24.4 39.4-24.4 64H320c-42.3 0-78.2-27.4-91-65.3c-5.1 .9-10.3 1.3-15.6 1.3c-14.1 0-27.9-3.3-40.5-9.6zM96 160c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm144-16c0 8.8-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16z"/>
      </svg>
    </div>
    <figcaption>
      Try resizing the rectangle above to see how perfectly the otter SVG inside scales.
    </figcaption>
  </figure>
  <p>
    At the same time, SVGs tend to be very small in file size compared to other types of images, another bonus for web developers. Loading images is one of the bigger challenges front-end developers face when making websites, as images can have large file sizes. Images loading slowly can cause web-pages to stutter while they load. The small file size of SVGs means they can often be loaded quickly and without signficant impact on the performance of a web page.
  </p>
  <p>
    SVGs make drawing simple shapes... simple. Furthermore, SVGs allow one to draw any type of curving line using Bezier curves. Bezier curves allow one to draw a curve by specifying the beginning and ending points of a line, and then specifying one or two "control points", points which "pull" on the line, bending it's shape. By connecting a series of curving and straight lines, SVGs can draw any kind of shape.
  </p>
  <figure>
    <svg class="container" viewBox="0 0 1920 1080">
      <rect x="100" y="100" width="500" height="880" />
      <circle cx="960" cy="540" r="300" />
      <ellipse cx="1600" cy="540" rx="250" ry="440" />
    </svg>
    <img src="./technology/svg-pic1.webp" alt="SVG code that draws a rectangle, circle and ellipse." />
    <figcaption>
      Drawing simple shapes with SVG is easy.
    </figcaption>
  </figure>
  <p>
    When drawing shapes, we can colorize them using two different attributes, stroke and fill. The stroke is the outline of the shape, and the fill is the interior. We can give these areas different colors, and we can also give different properties to the stroke to alter it's appearance.
  </p>
  <figure>
    <svg class="container" viewBox="0 0 1920 1080">
      <circle fill="black" cx="480" cy="100" r="50" />
      <line stroke="black" stroke-width="10" stroke-dasharray="20 20" 
        x1="0" y1="1080" x2="480" y2="100" 
      />
      <line stroke="black" stroke-width="10" stroke-dasharray="20 20" 
        x1="960" y1="1080" x2="480" y2="100" 
      />
      <path stroke="magenta" stroke-width="50"
        d="M 0 1080
        Q 480 100 960 1080"
      />
      <circle fill="black" cx="1800" cy="500" r="50" />
      <line stroke="black" stroke-width="10" stroke-dasharray="20 20" 
        x1="960" y1="1080" x2="1800" y2="500" 
      />
      <line stroke="black" stroke-width="10" stroke-dasharray="20 20" 
        x1="1920" y1="1080" x2="1800" y2="500" 
      />
      <path stroke="magenta" stroke-width="50"
        d="M 960 1080
        Q 1800 500 1920 1080"
      />
    </svg>
    <img src="./technology/svg-pic2.webp" alt="SVG code demonstrating Bezier curves" />
    <figcaption>
      Here we see two Bezier curves (magenta) being pulled towards different "control points" (black).
    </figcaption>
  </figure>
  <br/>
  <figure>
    <svg class="container" viewBox="0 0 1920 1080">
      <circle fill="red" stroke="purple" stroke-width="100" 
        cx="25%" cy="50%" r="300"
      />
      <circle fill="red" stroke="purple"
        stroke-width="100" stroke-dasharray="100 10"
        cx="75%" cy="50%" r="300"
      />
    </svg>
    <img src="./technology/svg-pic3.webp" alt="SVG code demonstrating the use of the fill and stroke attributes to color a shape." />
    <figcaption>
      We can determine the colors of shapes using both the stroke and fill attributes.
    </figcaption>
  </figure>
  <p>
    We can also use SVGs to create color gradients: linear, radial and conical. These allow us to create subtle transitions between two or more colors.
  </p>
  <figure>
    <svg class="container" viewBox="0 0 1920 1080">
      <defs>
        <radialGradient id="RadialGradient1">
          <stop offset="0%" stop-color="red" />
          <stop offset="50%" stop-color="magenta" />
          <stop offset="100%" stop-color="blue" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="100%" height="1080" 
        fill="url(#RadialGradient1)" 
      />
    </svg>
    <figcaption>
      An example of a radial gradient which goes from red to magenta to blue.
    </figcaption>
  </figure>
  <p>
    SVGs can draw and manipulate text, including the path along which the text is drawn, allowing for effects that would be very difficult to achieve in a browser using CSS.
  </p>
  <figure>
    <svg class="container" viewBox="0 0 1920 1080">
      <defs>
        <path id="path" d="M 400 1000
          Q 0 0 960 400
          L 1600 300
          Q 1800 540 1600 800
          H 200
        "/>
      </defs>
      <text stroke="blue">
        <textPath href="#path">You can't do this with CSS</textPath>
      </text>
    </svg>
    <figcaption>
      With SVG we can alter the path of text to follow Bezier curves.
    </figcaption>
  </figure>
  <p>
    One of the more powerful features of SVGs is the creation of patterns, which allow us to take a graphic and re-draw it, with potential alterations, an indefinite number of times. This can make it quite easy to create complex graphics from a small amount of code.
  </p>
  <figure>
    <svg class="container" viewBox="0 0 1920 1080">
      <defs>
        <pattern id="pattern" viewBox="0 0 40 40" width="10%" height="10%">
          <circle cx="20" cy="20" r="30" stroke="red" stroke-width="10"/>
          <circle cx="20" cy="20" r="10" stroke="red" stroke-width="5" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" />
    </svg>
    <img src="./technology/svg-pic4.webp" alt="SVG code demonstrating how to make a pattern." />
    <figcaption>
      We can create a repeating pattern that covers an indefinitely large area with very little code.
    </figcaption>
  </figure>
  <p>
    Like CSS, SVGs also have the ability to filter other graphics, allowing for effects like blurring and color alteration. However, SVG filters are quite a bit more sophisticated than what CSS has on offer, allowing filters to be fed to each other in a sequence to create effects not possible in CSS.
  </p>
  <figure>
    <img src="./technology/svg-pic5.webp" alt="A salad." />
    <svg class="container" viewBox="0 0 1920 1080">
      <defs>
        <filter id="filter">
          <feMorphology operator="erode" radius="1" result="morph" />
          <feDisplacementMap
            in2="morph"
            in="SourceGraphic"
            scale="200"
            xChannelSelector="G"
            yChannelSelector="G"
            result="displace" 
          />
        </filter>
      </defs>
      <image x="0" y="0" width="100%" height="100%" 
        href="./technology/svg-pic5.webp" 
        filter="url(#filter)"
      />
    </svg>
    <img src="./technology/svg-pic6.webp" alt="SVG code showing the application of filters to an image." />
    <figcaption>
      We can feed the results of one SVG filter to the next, to alter images or other types of graphics in a variety of ways.
    </figcaption>
  </figure>
  <p>
    When the SVG language was first released in 1999, it promised to be a useful tool for web developers interested in more advanced graphical capabilities than offered by CSS. Unfortunately, the SVG specification was not strongly supported by browsers, and SVG languished in disuse. This also caused the language to fall behing in being updated, and the current version of SVG is essentially the 1.0 verion. However, in recent years, support of SVGs has filled-out among browsers, and the benefits of SVGs, their advanced graphical capabilities, their scalability, their small file sizes, have led to widespread adoption by developers. Now the standard in icon design, an exciting new vista for the application of SVGs is in visualized data design, such as graphs, charts and diagrams.
  </p>
</TechnologyListArticle>

<!-- STYLES ////////////////////////////////////////////////// -->
<style>
  .container {
    border: 0.3rem solid var(--color1-2);
    background-color: var(--color2);
    aspect-ratio: 16 / 9;
  }
  .container svg, svg {
    fill: var(--color1) !important;
    color: var(--color1) !important;
    width: 100%;
  }
  #container1 {
    resize: both;
    width: 200px;
    height: 200px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #container1 svg {
    width: 100%;
    max-height: 100%;
  }
  @media screen and (orientation: portrait) {
    text {
      font-size: calc(1200% - 1px);
    }
  }
  @media screen and (orientation: landscape) {
    text {
      font-size: calc(550% - 1px);
    }
  }
</style>