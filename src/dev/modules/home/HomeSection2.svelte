<!-- MARKUP /////////////////////////////////////////////////// -->
<section>
  <h3>3.) Optimized for High Performance</h3>
  <ul>
    <li>
      <div class="animation">
        <div id="animation1"></div>
        <div id="animation2"></div>
        <p id="animation3">Loading...</p>
        <div id="animation4">
          <p>I'm a fancy webpage...</p>
          <svg viewBox="0 0 640 512">
            <path d="M407 47c9.4-9.4 24.6-9.4 33.9 0l17.2 17.2c1.9-.1 3.9-.2 5.8-.2h32c11.2 0 21.9 2.3 31.6 6.5L543 55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L564 101.9c7.6 12.2 12 26.7 12 42.1c0 10.2 7.4 18.8 16.7 23c27.9 12.5 47.3 40.5 47.3 73c0 26.2-12.6 49.4-32 64v32c0 8.8-7.2 16-16 16H560c-8.8 0-16-7.2-16-16V320H480v16c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V318.4c-11.8-2.4-22.7-7.4-32-14.4c-1.5-1.1-2.9-2.3-4.3-3.5c-17-14.7-27.7-36.4-27.7-60.5c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 44.7 26.2 83.2 64 101.2V352c0 17.7 14.3 32 32 32h32v64c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V372c-19.8 7.7-41.4 12-64 12s-44.2-4.3-64-12v76c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V329.1L45.9 369.7c-5.4 12.1-19.6 17.6-31.7 12.2S-3.3 362.4 2.1 350.3L24 300.9c5.3-11.9 8-24.7 8-37.7C32 155.7 117.2 68 223.8 64.1l.2-.1h7.2H256h32c41.7 0 83.4 12.1 117.2 25.7c1.7-1.8 3.5-3.6 5.3-5.2L407 81c-9.4-9.4-9.4-24.6 0-33.9zm73 185c0-13.3-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24zm88 24c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24zM480 144c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16zm48 16c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16z"/>
          </svg>
        </div>
      </div>
      <h4>Quick Page Load</h4>
    </li>
    <li>
      <div id="animation-container2" class="animation">
        <div id="animation5-1"></div>
        <div id="animation5"></div>
        <div id="animation6">
          <div>Enter</div>
          <div>Exit</div>
        </div>
      </div>
      <h4>Smooth Transitions</h4>
    </li>
    <li>
      <div class="animation">
        <svg id="smartphone" viewBox="0 0 384 512">
          <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"/>
        </svg>
        <div id="animation7"></div>
        <div id="animation8"></div>
        <svg id="speech-bubble" viewBox="0 0 512 512">
          <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/>
        </svg>
        <p id="speech">I'm<br/> so<br/> fast</p>
      </div>
      <h4>Mobile-First Design</h4>
    </li>
  </ul>
</section>

<!-- STYLES /////////////////////////////////////////////////////// -->
<style>
  h3 {
    display: none;
  }
  li {
    height: var(--viewport-height);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
  }
  h4 {
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.5rem;
    background-color: var(--color1-2);
    color: var(--color2);
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .animation {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vw;
    max-width: 600px;
    max-height: 600px;
    position: relative;
    top: 2.8%;
  }
  @media screen and (min-height: 600px) {
    .animation {
      top: 0%;
    }
  }
  @keyframes rotate1 {
    from {transform: rotateY(0deg);}
    to {transform: rotateY(360deg);}
  }
  @keyframes rotate2 {
    from {transform: rotateX(0deg);}
    to {transform: rotateX(-360deg);}
  }
  @keyframes fade-in-out {
    0% {opacity: 1;}
    35% {opacity: 1;}
    50% {opacity: 0;}
    85% {opacity: 0;}
    100% {opacity: 1;}
  }
  .animation > div {
    position: absolute;
    width: 90%;
    height: 90%;
  }
  #animation1, #animation2 {
    border: 1rem solid var(--color1-1);
    border-radius: 50%;
    opacity: 0;
    animation: fade-in-out 2s infinite;
  }
  #animation1 {
    animation: rotate1 2s infinite, fade-in-out 4s infinite forwards;
  }
  #animation2 {
    animation: rotate2 2s infinite, fade-in-out 4s infinite forwards;
  }
  #animation3 {
    opacity: 0;
    font-size: 3rem;
    animation: fade-in-out 4s infinite forwards;
  }
  #animation4 {
    opacity: 0;
    border-width: 0.3rem;
    animation: fade-in-out 4s 2s infinite forwards;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    background-color: var(--color1);
    color: var(--color2);
    row-gap: 2rem;
  }
  #animation4 p {
    font-size: 3rem;
    text-align: center;
  }
  #animation4 svg {
    width: 10rem;
  }
  #animation6 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 1em;
    color: var(--color2);
    font-size: 4rem;
  }
  #animation5-1, #animation5, #animation6 {
    width: 60%;
    border: none;
    opacity: 0;
  }
  @keyframes animation5-1 {
    0% {opacity: 0; transform: rotateZ(720deg) scale(0); background-color: var(--color1-2);}
    45% {opacity: 0.5;}
    50% {transform: rotateY(0deg) scale(1.5); background-color: hsl(180, 100%, 50%);}
    55% {opacity: 0.5;}
    100% {opacity: 0; transform: rotateY(720deg) scale(0); background-color: var(--color1-2);}    
  }
  #animation5-1 {
    transform: rotateZ(720deg);
    animation: animation5-1 6s infinite;
    background-color: var(--color1-2);
  }
  @keyframes animation5 {
    0% {opacity: 0; transform: rotateY(720deg) scale(0);}
    45% {opacity: 0.7;}
    50% {transform: rotateY(0deg) scale(1.3);}
    55% {opacity: 0.7;}
    100% {opacity: 0; transform: rotateY(720deg) scale(0);}
  }
  #animation5 {
    transform: rotateY(720deg);
    animation: animation5 6s infinite;
    background-color: var(--color1-2);
  }
  @keyframes animation6 {
    0% {opacity: 0; transform: rotateX(720deg) scale(0); background-color: var(--color1-2);}
    45% {opacity: 0.8;}
    50% {transform: rotateX(0deg) scale(1); background-color: var(--color1);}
    55% {opacity: 0.8;}
    100% {opacity: 0; transform: rotateX(720deg) scale(0);background-color: var(--color1);}
  }
  #animation6 {
    animation: animation6 6s infinite;
    transform: rotateX(720deg);
    background-color: var(--color1-2);
  }
  @keyframes colorchange {
    0% {color: var(--color1-1);}
    45% {color: var(--color1-1);}
    46% {color: var(--color2);}
    100% {color: var(--color2);}
  }
  #animation6 > div:nth-of-type(1) {
    color: var(--color2);
    animation: colorchange 6s 2.7s infinite;
  }
  #animation6 > div:nth-of-type(2) {
    color: var(--color1-5);
    animation: colorchange 6s infinite;
  }

  #smartphone {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0%;
    padding: 5% 25% 5% 0%;
  }
  #speech-bubble {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0% 5% 45% 40%;
    color: var(--color1-1);
  }
  #speech {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 11% 0% 30% 35%;
    line-height: 1.3;
    font-size: 7vw;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
    text-align: center;
    color: var(--color2);
  }
  @keyframes fade-in-out2 {
    0% {opacity: 1;}
    50% {opacity: 0;}
    100% {opacity: 1;}
  }
  #animation7, #animation8 {
    width: 41%;
    height: 57%;
    left: 17%;
    top: 16%;
    border: none;
  }
  #animation7 {
    background-image: linear-gradient(
      hsl(300, 100%, 50%),
      hsl(180, 100%, 50%)
    );
    animation: fade-in-out2 1s infinite ease-in-out;
  } 

  #animation8 {
    background-image: linear-gradient(
      hsl(180, 100%, 50%),
      hsl(300, 100%, 50%)
    );
    animation: fade-in-out2 1s 0.5s infinite ease-in-out;
  }

  @media screen and (min-width: 600px) {
    #speech {
      font-size: 2.3rem;
    }
    h4 {
      font-size: 2rem;
    }
  }

  @media screen and (orientation: landscape) {
    section {
      background-color: var(--color1);
      position: relative;
    }
    h3 {
      position: absolute;
      color: var(--color2);
      display: block;
      font-family: "Montserrat", sans-serif;
      line-height: 1.3;
      display: block;
      position: absolute;
      width: 100%;
      left: 0;
      top: 6vh;
      font-size: 3vw;
      text-align: center;
    }
    ul {
      display: flex;
      height: var(--viewport-height);
      padding-top: 10%;
      justify-content: space-evenly;
      align-items: flex-end;
    }
    li {
      width: 30vw;
      height: 100%;
      background-color: var(--color2);
      border-radius: 1rem 1rem 0 0;
      border: 0.6rem solid var(--color1-1);
      border-bottom-width: 10vh;
    }
    .animation {
      max-width: none;
      max-height: none;
      width: 25vw;
      height: 25vw;
    }
    #animation-container2 {
      width: 100%;
    }
    h4 {
      bottom: -10vh;
      font-size: 2vw;
      background-color: transparent;
    }
    #animation3 {
      font-size: 2rem;
    }
    #animation4 p {
      font-size: 2rem;
    }
    #animation4 svg {
      width: 40%;
    }
    @keyframes shuffle2 {
      0% {transform:translate(0%);}
      25% {transform: translate(0%);}
      50% {transform: translate(-130%);}
      75% {transform: translate(-130%);}
      100% {transform: translate(0%);}
    }
    #speech {
      font-size: 1.8vw;
    }
  }
  

</style>