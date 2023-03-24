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
  header={"CSS"}
  subHeader={"Cascading Style-Sheets"}
  link={["https://developer.mozilla.org/en-US/docs/Web/CSS", "MDN"]}
>
  <p>
    CSS is a coding language built for one purpose: to style HTML elements. While HTML provides content, structure and certain forms of interactivity, without CSS, web-pages would all look very, very ugly. It is through CSS that the front-end developer can pick out matching colors or interesting fonts, and construct layouts and animations. HTML delivers content, but CSS allows the developer to style that content into something attractive and stylistically compelling.
  </p>
  <figure>
    <img src="./technology/css-pic1.webp" alt="Some CSS code." />
    <figcaption>
      Some typical CSS code.<br/>
      The <em>p</em> selects all paragraphs.
      Each paragraph is given red-colored text, 20 pixel margins,
      and the font used is Arial.
    </figcaption>
  </figure>
  <p>
    The seperation of content from style was an important choice made by Sir Tim Berners Lee when designing the original version of HTML. During the 1990s, different ideas of how to style web-pages were considered, including the ideas that browsers would choose how to style content, or that users could makes such choices. In the second half of the 90s, CSS emerged as the official option for allowing web-developers to style web-pages.
  </p>
  <p>
    Because HTML and CSS are seperate, web developers can potentially style the same content in a variety of ways. An interesting demonstration of this idea is shown at the website <a href="http://www.csszengarden.com/" target="_blank" rel="noopener noreferrer">CSS Zen Garden</a>, wherein the same content is styled in a number of distinctive aesthetic themes.
  </p>
  <p>
    It turns out that styling web elements is a fairly complicated thing, and CSS is in fact quite a bit more complex than HTML. CSS deals with layout, typography, colors, adjusting images and animations. Using CSS, a developer can change the color of a link when it is hovered over, or the image of the cursor when this happens, or they can adjust the layout of a page when a user views the page on mobile, versus when they view it on a desktop computer monitor. 
  </p>
  <figure>
    <img src="./technology/css-pic2.webp" alt="CSS code which causes a link to turn red and grow in size when hovered." />
    <a style="font-size: 2rem;" href={null}>I'm a link!</a>
    <figcaption>
      This CSS code selects all links, <em>a</em>, and says that if a link is hovered over by the mouse, it's text turns red, and it grows in size by 120%.
    </figcaption>
  </figure>
  <p>
    Among the most important problems that CSS tackles is layout. Because websites are viewed on a variety of different types of devices with different sizes and aspect-ratios of screens, website layout is a particularly tricky challenge, a challenge which developers call "responsive design". The original conception of the world-wide-web was as a series of inter-linked text documents, and so printed material texts provided an influential reference point in early approaches to website layout. However, as time went on and the conception of the internet expanded, this reference proved to be more and more limiting. The widespread adoption of smartphones following the release of the first Iphone in 2007 further complicated matters by forcing developers to consider designing for both desktop and mobile devices. CSS has evolved significantly since the late 1990s to address these problems, introducing two modules: Flexbox and Grid, which have become particularly important tools in responsive design, as well as media queries: blocks of code which adjust the style of a page specifically based on properties of a device, such as it's screen width or aspect-ratio.
  </p>
  <figure>
    <img src="./technology/css-pic3.webp" alt="CSS code demonstrating media queries." />
    <figcaption>
      An example of media queries.<br/>
      This code says that if a device has a "portrait" aspect-ratio (probably a smartphone or tablet), the contents of a list should be organized in a column.<br/>
      On the other hand, if the aspect-ratio is "landscape" (desktop monitor), the contents of a list should be organized in a row.
    </figcaption>
  </figure>
  <p>
    CSS allows the website stylist to manipulate colors in a variety of ways as well. Besides a number of pre-defined colors, CSS allows the developer to create color programatically using features such as hue, saturation and lightness. Developers can also alter the opacity of elements, making them semi-transparent, allowing elements to overlap and blend. CSS can even alter the colors of images using filters, allowing an image to be blurred, darkened, or made black-and-white.
  </p>
  <figure>
    <div id="container1">
      <div></div>
      <div></div>
    </div>
    <figcaption>
      The function <code>hsl</code> takes three numbers, representing hue, saturation and lightness.<br/>
      Using these three numbers, we can generate a vast variety of colors.<br/>
      Here we have two rectangles, one with a color of<br/> <code>hsl(0, 100%, 50%)</code>(red),<br/> and the other with a color of<br/> <code>hsl(180, 100%, 50%)</code>(cyan).<br/>
      The second rectangle has also been made 50% transparent using a fourth number, <code>alpha</code>, set to <code>0.5</code>
    </figcaption>
  </figure>
  <p>
    One of the most exciting features of CSS is it's ability to create animations. Developers can animate based on user actions, such as hovering over an element or clicking it, or they can animate things when a page first loads, or have an animation loop indefinitely. Using animations, developers can move, rotate, scale and stretch elements, and this can in turn help to create more fluid, intuitive and compelling user interfaces.
  </p>
  <figure>
    <img src="./technology/css-pic4.webp" alt="CSS code demonstrating an animation design." />
    <div id="animation"></div>
  </figure>
  <p>
    CSS has gone through several iterations, introducing new features over time. Although technically the most recent standard version of CSS is CSS3, the reality of this coding language is more complex. CSS is broken into a number of sub-groups (for example, there is a sub-group for fonts, and another sub-group for colors), and each of these groups is being worked on and updated in a semi-independent fashion. Thus while HTML and JavaScript have specific official versions, CSS exists in bit more of a fluid, ambiguous state, essentially being updated all the time. Furthermore, different browsers have different levels of support of different parts of CSS. This can cause problems for developers, as code that works in one browser can turn out to be broken in a different browser because of differences in which parts of CSS a browser is currently supporting, as well as differences in how browsers interpret the CSS specification.
  </p>
  <p>
    As CSS matures, it becomes a more and more powerful tool for developers, allowing for more sophisticated approaches to responsive design or animation, and helping to make the web, hopefully, a place that is not just informative, but also beautiful.
  </p>
</TechnologyListArticle>

<style>
  a:hover {
    color: red;
    transform: scale(1.2);
  }
  #container1 {
    width: 100%;
    height: 200px;
    position: relative;
    background-color: white;
  }
  #container1 div {
    position: absolute;
    width: 70%;
    height: 70%;
    border: 4px solid black;
  }
  #container1 div:nth-of-type(1) {
    left: 0;
    background-color: hsl(0, 100%, 50%);
  }
  #container1 div:nth-of-type(2) {
    right: 0%;
    bottom: 0%;
    background-color: hsla(180, 100%, 50%, 0.5);
  }
  @keyframes animate {
    0% {
      background-color: blue;
      transform: rotate(0) scale(0.5) skew(0deg, 0deg);
      opacity: 1;
    }
    50% {
      background-color: pink;
      transform: rotate(180deg) scale(1.5) skew(80deg, 0deg);
      opacity: 0.5;
    }
    100% {
      background-color: blue;
      transform: rotate(360deg) scale(0.5) skew(0deg, 0deg);
      opacity: 1;
    }
  }
  #animation {
    height: 100px;
    width: 100px;
    animation: animate 5s ease-out infinite;
  }
</style>