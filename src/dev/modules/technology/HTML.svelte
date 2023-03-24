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
  header={"HTML"}
  subHeader={"HyperText Markup Language"}
  link={["https://developer.mozilla.org/en-US/docs/Web/HTML", "MDN"]}
>
    <p>
      HTML is perhaps the most fundamental coding language in the creation of the world-wide-web. Designed by Sir Tim Berners Lee in 1990, HTML became the foundation upon which virtually all of the contemporary internet has been built.
    </p>
    <p>
      HTML is a markup language, a coding language meant to assist a person in creating a complex document. Prior to HTML, other markup languages had been created for the purpose of, for instance, creating mathematical and scientific diagrams which would be difficult to create in a standardized way using normal writing software.
    </p>
    <figure>
      <img src="./technology/html-pic1.webp" alt="Some HTML code." />
      <figcaption>Some standard HTML for a web page.<br/> HTML is made up of elements (magenta), which can have opening and closing tags.<br/>We can deliver text (white) to the web-page by placing it between opening and closing tags of certain elements.</figcaption>
    </figure>
    <p>
      One of the primary roles of HTML is to deliver content to a web-page. Through HTML, a front-end developer can deliver text, images, audio, and video, as well as embedding content from other websites.
    </p>
    <figure>
      <img src="./technology/html-pic2.webp" alt="HTML code for an online image." />
      <img src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="A banana." />
      <figcaption>
        The HTML code for an image.<br/> We can deliver an image to a web-page using the <em>src</em> attribute, which takes a file path, either to an image in the website's directory, or to an image stored somewhere else online.
      </figcaption>
    </figure>
    <p>
      HTML is also designed to enable certain forms of interactivity for users, including links, text inputs, checkboxes, video-player controls, and form submission, among other things.
    </p>
    <figure>
      <img src="./technology/html-pic3.webp" alt="HTML code for interactive elements: a link, a text input, and a controls for playing audio." />
      <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
        A Link to the Google search engine page.
      </a>
      <label for="text-input">A text input:</label>
      <input type="text" id="text-input" inputmode="none" />
      <audio controls >
        <source src="./technology/html-sound1.mp3" />
      </audio>
    </figure>
    <p>
      HTML can include "meta-data", data which is not shown to the user but which assists a browser in interpreting and providing context for the code. Such data can play an important role in responsive design, text encoding, and search-engine optimization.
    </p>
    <figure>
      <img src="./technology/html-pic4.webp" alt="HTML code summarizing a web pages content." />
      <figcaption>
        The meta element, when given the name 'description', can provide a short summary of the web page which the Google search engine can use to determine if that page is relevant to a search inquiry.
      </figcaption>
    </figure>
    <p>
      Lastly, HTML allows front-end developers to organize a web-page into a hierarchical structure, dividing a page into sections, sub-sections, etc, reflecting the semantic inter-relationships between different elements. Elements such as headers, figures, lists and tables all assist the developer in determining the underlying structure of the document. In turn, screen-reader software for the visually-impaired can read these structures to appropriately determine how a web-page should be read out.
    </p>
    <figure>
      <img src="./technology/html-pic5.webp" alt="HTML code showing the structure of a navigation menu." />
      <figcaption>
        A ubiqitous design on the internet: the navigation menu of a website.<br/> <em>nav</em> stands for navigation. <em>ul</em> is a type of list, with <em>li</em> being a list item. Each list item contains a link, <em>a</em>.
      </figcaption>
    </figure>
    <p>
      The original version of HTML only had 18 elements. Various versions of the language have appeared since 1990, the most recent version, at the time of writing, is HTML 5, from 2014, which has approximately 110 elements. Although relatively simple compared to CSS and JavaScript, HTML continues to grow and develop, and to be the fundamental access point through which code is delivered to the browser.
    </p>

</TechnologyListArticle>