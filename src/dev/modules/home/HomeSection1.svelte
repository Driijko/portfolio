<!-- MARKUP /////////////////////////////////////////////////////// -->
<section class="cruncher">
  <div>
    <h3>2. Pixel-Perfect Responsive Design</h3>
    <svg id="smartphone" viewBox="0 0 384 512">
      <path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
      <image x="15%" y="8%" width="70%" href="./home/pic1.webp" />
    </svg>
    <p>
      From the smallest smartphone...
    </p>
  </div>
  <div>
    <svg id="desktop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"/>
      <image x="5%" y="10%" width="90%" href="./home/pic2.webp" />
    </svg>
    <p>
      ...to 4K monitors.
    </p>
  </div>
</section>


<!-- STYLES /////////////////////////////////////////////////////// -->
<style>
  section {
    color: var(--color1-2);
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    row-gap: 5vh;
    height: var(--viewport-height);
    background-color: var(--color1);
    padding-top: 7rem;
  }
  h3 {
    display: none;
  }
  svg {
    width: 70vw;
    max-height: 800px;
    color: var(--color1-1);
  }
  #smartphone {
    width: 70vw;
  }
  #desktop {
    width: 90vw;
  }
  p {
    font-size: 1.3rem;
    color: var(--color1-2);
  }

  @media screen and (orientation: portrait) and (min-width: 600px) {
    p {
      font-size: 1.8rem;
    }
  }

  @media screen and (orientation: landscape) {
    section {
      display: flex;
      position: relative;
      padding-top: 3%;
      justify-content: center;
      align-items: center;
      background-color: var(--color2);
    }
    h3 {
      font-family: "Montserrat", sans-serif;
      line-height: 1.3;
      display: block;
      position: absolute;
      width: 100%;
      left: 0;
      top: 6vh;
      text-align: center;
      font-size: 2rem;
      color: var(--color1);
    }
    div {
      width: 50%;
      height: 80%;
      justify-content: flex-end;
      padding-bottom: 6%;
      padding-top: 10%;
    }
    svg {
      max-height: none;
    }
    #smartphone {
      width: 30%;
    }
    #desktop {
      width: 65%;
    }
  }
</style>