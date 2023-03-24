<!-- SCRIPTS //////////////////////////////////////////////////////// -->
<script>
  // DEVICE STATE --------------------------------------------------
  let viewportOrientation = window.innerWidth >= window.innerHeight ? "landscape" : "portrait";
  
  // LOCAL STATE -----------------------------------------------------
  let currentSelected = viewportOrientation === "landscape" ? 0 : null;
  let area2Open = viewportOrientation === "landscape" ? true : false;

  // EVENT HANDLERS ----------------------------------------------------
  function updateCurrentSelected(num) {
    currentSelected = num;
  }
  function openArea2() {
    area2Open = true;
  }
  function closeArea2() {
    area2Open = false;
    const timerId = setTimeout(()=> {
      currentSelected = null;
    }, 1000);
  }

</script>

<!-- MARKUP ////////////////////////////////////////////////////////// -->
<section>
  <div id="area1">
    <slot name="main-list"
      selectItem={
        viewportOrientation === "landscape" ? updateCurrentSelected 
        : (num) => {
          updateCurrentSelected(num);
          openArea2();
        }
      } 
      {currentSelected}
    />
  </div>
  <div id="area2"
    class:open={area2Open} class:closed={!area2Open}
  >
    <slot name="selected-list-item" {closeArea2} {currentSelected} />
  </div>
</section>

<!-- STYLE ////////////////////////////////////////////////////// -->
<style>
  section {
    height: var(--viewport-height);
    position: relative;
  }
  #area1, #area2 {
    height: 100%;
  }
  @media screen and (orientation: portrait) {
    #area2 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      transform-origin: 100% 0%;
      transition: transform 1s ease-out;
    }
    #area2.open {
      transform: scaleX(1);
    }
    #area2.closed {
      transform: scaleX(0);
    }
  }
  @media screen and (orientation: landscape) {
    section {
      display: flex;
    }
    #area1 {
      width: 30%;
    }
    #area2 {
      width: 70%;
    }
  }
</style>