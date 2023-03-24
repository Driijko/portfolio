<!-- SCRIPTS //////////////////////////////////////////////////// -->
<script>
  import PortfolioItem from "./PortfolioItem.svelte";
</script>

<!-- MARKUP ------------------------------------------------------ -->
<PortfolioItem 
  logoData={[
    "./portfolio/caretakers-logo.webp", 
    "Caretakers of the Waiting."
  ]}
  genericDescriptor={"Radio-Play <br/> Profile & Streaming"}
  date={"2022"}
  siteAddress={"https://driijko.github.io/caretakers-of-the-waiting"}
  pictureData={[
    "./portfolio/caretakers-site-pic-portrait.webp",
    "./portfolio/caretakers-site-pic-landscape.webp",
    "Home page of website for radio-play Caretakers of the Waiting."
  ]}
  description={"Caretakers of the Waiting is a dystopian science-fiction radio-play in five acts. This site profiles the play as well as making it available for streaming. A highlight of the design is that each act has it's own accompanying animation, built using SVGs and the GSAP3 animation library."}
  technologies={[
    "HTML",
    "CSS",
    "JavaScript",
    "SVG",
    "GSAP3",
  ]}
/>