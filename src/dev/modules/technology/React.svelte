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
  header={"React"}
  link={["https://reactjs.org/", "the React website"]}
>
  <p>
    Since the 1990s, web devlopment has become increasingly ambitious and complex. The world's more popular websites, such as Facebook, Youtube or Wikipedia, connect vast quantities of code distributed over a global network. With increasing complexity, developers required new tools that were optimized to handle this complexity. It was from this situation that JavaScript frameworks developed: JavaScript libraries that standadize how developers write code, assist them in tackling common but difficult problems, and guide them away from potential pitfalls. 
  </p>
  <p>
    Developed by Facebook and first released in 2013, React has emerged as the most popular JavaScript framework. The Facebook website is exactly the type of website that benefits from such a framework: a truly monumental system of code that must be coordinated in a precise and consistent way to avoid potential errors and bugs. React provides a set of tools and guidelines to unify the development of just such a system. And with the Facebook website being a testament to the efficacy of React, it has been adopted by many front-end developers as the JavaScript framework of choice.
  </p>
  <p>
    React is specifically designed to assist in the creation of user-interfaces, and to correlate how a user-interface is displayed and behaves with underlying data. React attempts to constrain the developer from unnecessarily duplicating or distributing data, and to avoid updating what is displayed to the user unless there is an actual need to do so. 
  </p>
  <p>
    To improve efficiency and avoid errors and bugs, React adheres to a declarative, functional programming paradigm, with the goal instrinsic to that paradigm of avoiding side-effects and mutability of state. Although imperative styles of programming are possible within React, it's design faciliates a functional approach.
  </p>
  <p>
    React is an SPA: a single-page application. Rather than a user skipping from page to page of a website, React keeps the user on a single page, and updates what is rendered to that page based on the user's interactions. SPAs can improved performance of moving about the application since new data can be displayed to the user without requiring requests to be sent off to a server. 
  </p>
  <figure>
    <img src="./technology/react-pic1.webp" alt="An HTML file within a React project." />
    <figcaption>
      In React, you only need a single HTML file. Within the body element, a single <em>div</em> element is placed with an id of "root". All further elements and content are inserted into this single element through JavaScript. Thus while a React app might give the impression of having multiple web-pages, in fact, all changes are simply based on different elements being inserted to and removed from a single HTML document. This is the default approach of all "single-page applications" (SPA).
    </figcaption>
  </figure>
  <p>
    To control how things are rendered on a single web-page, React uses a virtual DOM, a representation of the DOM internal to the application. Internally, updates to the virtual DOM are monitored, and then the actual DOM is only updated where it is necessary to do so. This can increase performance by optimizing how the DOM is updated in ways that would be difficult to achieve without a framework like React.
  </p>
  <p>
    A React application is made up of components: modular blocks of code which handle specific aspects of the applications look and data-processing. The modular nature of components can ease both development and maintenance of an application by seperating distinctive aspects of the application into different files. For example, let's say we have a website that has a top-of-page header on each page. Using HTML, we would typically have to copy the code for the header, along with any accompanying CSS or JavaScript, for each different page of the website. In React, we can simply make a header component, and then reference that for each sepearate page. By breaking an application into components, React can improve the readability and re-usability of code.
  </p>
  <figure>
    <img src="./technology/react-pic2.webp" alt="React code demonstrating importing and rendering custom components." />
    <figcaption>
      In React, we can create custom components and then re-use them throughout an app, and even port them to other React projects. In this case, we have both a SiteHeader and a SiteFooter component, which we can import to other components and re-use multiple times on a website.
    </figcaption>
  </figure>
  <p>
    React uses JSX, an extension of JavaScript which allows the developer to write HTML-like code inside a JavaScript file. You can use JSX to create HTML elements, like paragraphs or links, but React also uses the same syntax for referencing components. This allows the developer to easily construct structured content to display to the user within a JavaScript environment, thus allowing that developer to connect that content to internal state and JavaScript features like variables, loops, data-structures, etc, and to intuitively reflect the relationship between HTML elements and the custom components of the application.
  </p>
  <figure>
    <img src="./technology/react-pic3.webp" alt="React code demonstrating JSX and connecting JSX with data-structures." />
    <figcaption>
      JSX makes it easy to build HTML structures within JavaScript. For example, here we have a compnent, <em>Nav</em>, which renders a navigation menu. Furthermore, we can connect JSX elements to variables, functions, data-structures, and other JavaScript entities, by using squiggly braces within JSX.
    </figcaption>
  </figure>
  <p>
    Because React is so popular, a number of other JavaScript libraries have been created with React at least partially in mind. React Router allows for the address bar of the browser to be updated when the user makes "page-to-page" transitions, something that SPAs don't provide that may be expected by users. Styled Components allows for CSS to be written in ways that match the React approach to constructing components. Redux creates a single data store where all state is contained, and then updates to that single store are distributed to the application, facilitating React's commitment to a functional approach by creating "a single source of truth". 
  </p>
  <figure>
    <img src="./technology/react-pic4.webp" alt="Code demonstrating Styled Components." />
    <figcaption>
      Styled Components allow us to approach writing CSS in a modular way within a JavaScript environment which mirrors the general approach of React, allowing developers to extend this approach more broadly within an app.
    </figcaption>
  </figure>
  <p>
    React has been riding a huge wave of popularity for several years now, with other frameworks such as Angular and Vue not being nearly as widely used. With the front-end development world proceeding at a blistering pace, it's hard to say exactly how long React will rule as the dominant framework, but it seems safe to say that it has at least a few more years to go in this position. React has certainly helped set a precedent for front-end code being written in a modular and functional approach, and it seems likely that these aspects will carry on into the future.
  </p>
</TechnologyListArticle>