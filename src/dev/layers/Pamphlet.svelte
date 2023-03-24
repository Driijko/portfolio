<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS ----------------------------------------------
  import { onMount, onDestroy } from "svelte";

  // PROPS ----------------------------------------------------
  export let totalSnapPointsOptions;
  export let trackCurrentSnapPoint = null;

  // ELEMENT / COMPONENT REFERENCES -------------------------------
  let snapScrollContainer;

  // SETTINGS ---------------------------------------------------
  let totalSnapPoints;
  if (window.innerWidth >= window.innerHeight) {
    totalSnapPoints = totalSnapPointsOptions[0];
  } else {
    totalSnapPoints = totalSnapPointsOptions[1];
  };

  // LOCAL STATE ------------------------------------------------
  let currentSnapPoint = 0;
  let scrolling = false;
  let touchStart;

  // FUNCTIONS -------------------------------------------------
  function snap(test1, test2) {
    if (test1 && currentSnapPoint < totalSnapPoints - 1) {
      currentSnapPoint += 1;
      snapScrollContainer.style.transform = `translateY(-${window.innerHeight * currentSnapPoint}px)`;
    }
    else if (test2 && currentSnapPoint > 0) {
      currentSnapPoint -= 1;
      snapScrollContainer.style.transform = `translateY(-${window.innerHeight * currentSnapPoint}px)`;
    }
    if (trackCurrentSnapPoint) {
      trackCurrentSnapPoint(currentSnapPoint);
    }
  }

  // EVENT HANDLERS -------------------------------------------
  function handleWheel(e) {
    e.preventDefault();
    if (scrolling === false) {
      scrolling = true;

      snap(e.deltaY > 0, e.deltaY < 0);

      const timerId = setTimeout(()=> {
        scrolling = false;
      }, 500);
    };
  };

  function handleKeyDown(e) {
    if (e.key === "ArrowUp" || e.key ==="ArrowDown") {
      e.preventDefault();
      if (e.repeat === false) {
        snap(e.key === "ArrowDown", e.key === "ArrowUp");
      }
    }
  };

  function handleTouchStart(e) {
    touchStart = e.touches[0].clientY;
  }

  function handleTouchEnd(e) {
    let touchEnd = e.changedTouches[0].clientY;
    snap(touchStart > touchEnd + 5, touchStart < touchEnd - 5);
  }

  // LIFECYCLE -------------------------------------------------
  onMount(()=> {
    currentSnapPoint = 0;
    snap(true,false);

    // EVENTS LISTENERS --------------------
    snapScrollContainer.addEventListener(
      "wheel", handleWheel, {passive: false}
    );

    document.addEventListener(
      "keydown", handleKeyDown
    );

    snapScrollContainer.addEventListener(
      'touchstart', handleTouchStart, {passive: false}
    );

    snapScrollContainer.addEventListener(
      'touchend', handleTouchEnd, {passive: false}
    );

  });

  onDestroy(()=> {
    // EVENT LISTENERS ----------------------------
    document.removeEventListener("keydown", handleKeyDown);
  });

</script>

<!-- MARKUP //////////////////////////////////////////////////// -->
<div bind:this={snapScrollContainer}>
  <slot></slot>
</div>

<!-- STYLES //////////////////////////////////////////////////////// -->
<style>
  div {
    width: 100%;
    position: fixed;
    top: 0;
    transform: translateY(0);
    height: var(--viewport-height);
    /* transition: transform 0.8s ease-in-out; */
    transition: transform 0s ease-in-out;
  }
</style>
