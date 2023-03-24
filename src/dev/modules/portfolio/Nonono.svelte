<!-- SCRIPTS //////////////////////////////////////////////////// -->
<script>
  import PortfolioItem from "./PortfolioItem.svelte";
</script>

<!-- MARKUP ------------------------------------------------------ -->
<PortfolioItem 
  logoData={[
    "./portfolio/nonono-album-cover.webp", 
    "Mondrian."
  ]}
  genericDescriptor={"Album Profile & <br/> Streaming"}
  date={"2022"}
  siteAddress={"https://driijko.github.io/nonono-mood"}
  pictureData={[
    "./portfolio/nonono-site-pic-portrait.webp",
    "./portfolio/nonono-site-pic-landscape.webp",
    "Home page of website about the life and art of painter Piet Mondrian."
  ]}
  description={"<i>Mood</i> is a 2022 album from the band <em>nonono</em>. Dark, slow and atmospheric, this album was the band's response to the Covid pandemic and the contemporary global political scene. A highlight of this website's design is a customized audio player for streaming the album, which includes animations for each track. The animations were built using SVGs and the GSAP3 animation library."}
  technologies={[
    "HTML",
    "CSS",
    "JavaScript",
    "SVG", 
    "GSAP3",
  ]}
/>