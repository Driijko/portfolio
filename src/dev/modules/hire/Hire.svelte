<!-- MARKUP /////////////////////////////////////////////////////// -->
<div id="container">
  <div class="background"></div>
  <div id="paragraph-container">
    <p>
      I am currently available for freelance work. To set up a free one hour consultation, you can contact me at: 
    </p>
    <address>
      <a class="interface-style7" id="email-link" href="mailto:dreekodev@gmail.com">dreekodev@gmail.com</a> 
    </address>
    <p>
      The cost for a project varies depending on its size and scope. Below I outline some average costs and completion times for different projects, but please keep in mind that actual prices and times of completion may be smaller or greater depending on client's needs and desires. The free consultation process can help us fix a budget and timeline that suits your goals.
    </p>
    <p>
      Please keep in mind that along with creating a website, launching a website requires purchasing a domain name and choosing a hosting service. Also once a website is launched, it may require maintenance or updates. These can all be extremely minimal expenses, but again, it depends on the project. 
    </p>
  </div>


  <table>
    <caption>Services</caption>
    <thead>
      <th>Project</th>
      <th class="middle-column">Cost</th>
      <th>Time</th>
    </thead>
    <tr>
      <td>Logo Design</td>
      <td class="middle-column">$500</td>
      <td>1 - 2 weeks</td>
    </tr>
    <tr>
      <td>1 Page Site</td>
      <td class="middle-column">$500<br/> - <br/> $1000</td>
      <td>1 - 2 weeks</td>
    </tr>
    <tr>
      <td>1 - 3<br/> Page Site</td>
      <td class="middle-column">$1000<br/> - <br/> $2000</td>
      <td>2 weeks - <br/>1 month</td>
    </tr>
    <tr>
      <td>4 - 6<br/> Page Site</td>
      <td class="middle-column">$2000<br/> - <br/> $3000</td>
      <td>1 month</td>
    </tr>
    <tr>
      <td>+<br/> Back-End</td>
      <td class="middle-column">+<br/> $1000<br/> - <br/> $2000</td>
      <td>+<br/> 2 weeks - 1 month</td>
    </tr>
  </table>
</div>

<!-- STYLES ////////////////////////////////////////////////////// -->
<style>
  #container {
    display: flex;
    align-items: center;
    gap: 1.5em;
    line-height: 1.3;
    padding: 1.5em;
  }
  .background {
    background-image: url("../hire/pic0.webp");
    background-size: 200%;
    animation: background-shift 30s linear infinite;
    left: 0;
  }
  #paragraph-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5em;
    opacity: 0;
    animation: fade-in 2s 1s ease-out forwards;
  }
  @media screen and (orientation: portrait) {
    #container {
      flex-direction: column;
    }
  }
  @media screen and (orientation: landscape) {
    #container {
      flex-direction: row;
      align-items: flex-start;
    }
    #paragraph-container, table {
      flex: 1;
    }
    #paragraph-container {
      padding-top: 8%;
    }
  }

  p {
    max-width: 60ch;
  }
  address {
    display: block;
    text-align: center;
    text-decoration: underline;
  }
  address a {
    padding: 2%;
  }
  table {
    background-color: var(--color1);
    color: var(--color2);
    border-radius: 1em;
    font-family: "Montserrat";
    width: 100%;
    opacity: 0;
    animation: fade-in 2s 2s ease-in forwards;
  }
  caption {
    font-weight: bold;
    color: var(--color1);
    font-size: 2.5em;
    font-family: "Baloo 2";
  }
  thead {
    border-bottom: 0.3em solid var(--color2);
    font-weight: bold;
    font-size: 1.2em;
    letter-spacing: 0.05em;
  }
  thead, tr {
    display: flex;
  }
  tr {
    border-bottom: 0.1em solid var(--color2);
  }
  @media screen and (min-height: 600px) {
    tr {
      height: 7em;
    }
  }
  th, td {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 1;
  }
  th, td {
    padding: 1em 0.3em;
  }
  td {
    padding: 0.5em 0.3em;
  }
  .middle-column {
    border-left: 0.1em solid var(--color2);
    border-right: 0.1em solid var(--color2);
  }
  @media screen and (orientation: portrait) {
    table {
      max-width: 800px;
    }
  }
  @media screen and (orientation: landscape) {
    table {
      font-size: 0.8em;
    }
    thead {
      font-size: 1.5em;
    }
  }
  
</style>