<!-- SCRIPTS //////////////////////////////////////////////////// -->
<script>
  import PortfolioItem from "./PortfolioItem.svelte";
</script>

<!-- MARKUP ------------------------------------------------------ -->
<PortfolioItem 
  logoData={[
    "./portfolio/mondrian-logo.webp", 
    "Mondrian."
  ]}
  genericDescriptor={"Art History Essay"}
  date={"2022"}
  siteAddress={"https://driijko.github.io/mondrian"}
  pictureData={[
    "./portfolio/mondrian-site-pic-portrait.webp",
    "./portfolio/mondrian-site-pic-landscape.webp",
    "Home page of website about the life and art of painter Piet Mondrian."
  ]}
  description={"A website which overviews the life and work of the painter Piet Mondrian (1872 - 1944). Mondrian was an early adopter of abstraction in modern painting, and developed an iconic style that was influential in the world of painting, architecture, design and advertising. This site applies Mondrian's style to the design of the website itself, in particular to it's layout and animations."}
  order={"switch"}
/>