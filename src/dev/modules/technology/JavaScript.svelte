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
  header={"JavaScript"}
  link={["https://developer.mozilla.org/en-US/docs/Web/JavaScript", "MDN"]}
>
  <p>
    While HTML is the foundation upon which the world-wide-web has been built, by itself, HTML has limited capabilities. HTML is designed to provide structured content, and CSS is designed to style that content. In the mid-90s, JavaScript emerged as a way to offer front-end developers more control over the <em>behavior</em> of websites. While HTML handles certain forms of interactive interfaces, such as links and forms, there are many types of interface designs not possible with HTML alone. For more complex, dynamic designs, JavaScript is the tool needed.
  </p>
  <p>
    By the early 21st century, HTML, CSS and JavaScript had become the "holy trinity" of front-end web development. HTML handled content, CSS handled style, and JavaScript handled behavior. However, the reality was that JavaScript was far more versatile and powerful than either HTML or CSS, and in truth, it was given much broader responsibilities than simply handling "behavior".
  </p>
  <p>
    First of all, JavaScript is a programming language, with standard programming language features such as variables, conditionals, loops, functions and data-structures. HTML and CSS have very specific features, while JavaScript is general-purpose. These programming language features mean that developers using JavaScript can construct designs in a more abstract way, and then apply those designs to websites.
  </p>
  <figure>
    <img src="./technology/js-pic1.webp" alt="JavaScript code demonstrating functions, array data-structures, variables, and conditional code execution." />
    <figcaption>
      JavaScript includes functions, data-structures, variables and conditional code execution, all illustrated here.
    </figcaption>
  </figure>
  <p>
    Secondly, JavaScript can dynamically remove and add HTML elements or CSS styling rules. If a developer is only using HTML and CSS, the content, styles and interactivity first delivered to a web-page are generally fixed upon page load. HTML and CSS have a limited ability to "react" to user actions. JavaScript, on the other hand, can not only introduce a variety of forms of interactivity, but can also alter and re-structure styled content based on user interactions.
  </p>
  <figure>
    <img src="./technology/js-pic2.webp" alt="JavaScript code demonstrating accessing HTML elements and re-styling them." />
    <figcaption>
      This code accesses all paragraphs within an HTML document and set's their text color to be blue.
    </figcaption>
  </figure>
  <p>
    At the same time, JavaScript allows a developer to not only react to the user in more versatile ways, but also to data received from servers, the so-called "back-end". Thus JavaScript can structure and style content based both on the user's interactions as well as data received from servers. The ability for JavaScript to adapt dynamically to both the "front-end" and the "back-end" means that it tends to play a very large role in more complex web-designs than is capable through regular HTML or CSS.
  </p>
  <p>
    This has led to a scenario where JavaScript tends to play a more central, coordinating role in front-end web design. Rather than HTML, CSS and JavaScript each playing a unique and equal role, contemporary web development tends to place JavaScript at the core of a design, creating and removing HTML elements and CSS styling rules in response to user actions and server data.
  </p>
  <p>
    By itself, JavaScript is a pure programming language, capable of complex computations, but not actually of much use for web development. What makes JavaScript so powerful for web development is it's ability to tap <em>Web APIs</em>. Web APIs are systems built into a browser which JavaScript can access in order to do specific tasks. There are a lot of different Web APIs, which offer a variety of functionalities, from the Fullscreen API, which allows a website or an element on a website to go fullscreen, to the Web Speech API, which allows a website to receive speech as input, and produce synthesized speech as output.
  </p>
  <p>
    For the budding front-end developer, the Web API to first learn about is the DOM API. "DOM" stands for "Document-Object Model". It is through the DOM that JavaScript can access the hierarchical structure of an HTML document, as well as the CSS styling rules applied to it. The DOM is fundamental in making JavaScript able to access and manipulate the elements of a web-page. The DOM API is, accordingly, fairly complex, with a lot of different features to learn about.
  </p>
  <p>
    An important feature of the DOM is the event loop, a series of events which the developer can construct code to react to. For example, to construct a loading screen which fades out once a web-page is loaded, the developer constructs code which "listens" for the load event, an event which is fired by the browser once all resources of a page have finished loading.
  </p>
  <figure>
    <img src="./technology/js-pic3.webp" alt="JavaScript code demonstrating listening for a load event and fading out a loading screen upon that event." />
    <figcaption>
      Here we have a function that accesses a loading-screen and sets it's opacity to 0.<br/>
      Then we "listen" for the load event, and execute the function once the web-page is finished loading resources.
    </figcaption>
  </figure>
  <p>
    Another fundamental Web API is the Fetch API, which accesses and retrieves data from servers. This API sends a signal to a server, requesting certain data, which the server bundles up and sends back to the website. Using the Fetch API, a developer can respond to data from various parts of the web, allowing them to serve content to a user dynamically based on such data. The Fetch API is what allows websites to interact with the "back-end" of the internet.
  </p>
  <figure>
    <img src="./technology/js-pic4.webp" alt="JavaScript code demonstrating fetching data from another website." />
    <figcaption>
      This code fetches a bundle of data from a website.<br/>
      Once the data is retrieved, it is unpacked and logged in the browser's console.
    </figcaption>
  </figure>
  <p>
    One of the main features that was built into JavaScript specifically because of it's role as the primary programming language of front-end web development is <em>asynchronicity</em>. Typically, programming languages organize code in a linear manner. Once code has been interpreted and executed, we move on to the next bit of code. But JavaScript allows code to be interpreted but hang on for later execution, to wait for the right time to be used. This is because websites need to wait for code to be delivered across networks, which takes time. Asynchronicity allows JavaScript to adapt to the complex nature of the internet where code is being passed around over networks in ways that can be difficult to predict or time in exact ways.
  </p>
  <figure>
    <img src="./technology/js-pic5.webp" alt="JavaScript code demonstrating an asynchronous function." />
    <figcaption>
      This asynchronous function allows the browser to await the data being fetched before unpacking that data and returning it.
    </figcaption>
  </figure>
  <p>
    Like HTML and CSS, JavaScript is a living language, with new updates arriving over time. The most recent version of JavaScript is called "ES6", and was officially released in 2015. JavaScript has now entered a period of moving away from numbered official releases, and is becoming more like CSS, with new features being introduced on a per-feature basis, meaning the language is constantly updating, and that browsers tend to be a bit varied in terms of how well new features are supported.
  </p>
  <p>
    JavaScript has become increasingly important in web development since it's origins in the mid-90s. Node.js, released in 2009, offered a new version of the language that could run outside of the browser, meaning that developers could start using JavaScript not just for front-end code, but also for back-end code running on servers. And the arrival of JavaScript-based frameworks, such as Angular, React, Svelte and Vue, have encouraged devlopers to place JavaScript at the center of website designs, often regulating HTML and CSS through the framework.
  </p>
</TechnologyListArticle>

<style>

</style>