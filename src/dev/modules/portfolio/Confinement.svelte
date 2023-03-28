<!-- SCRIPTS //////////////////////////////////////////////////// -->
<script>
  import PortfolioItem from "./PortfolioItem.svelte";
</script>

<!-- MARKUP ------------------------------------------------------ -->
<PortfolioItem 
  logoData={[
    "./portfolio/confinementandcontagion-logo.png", 
    "Confinement and Contagion."
  ]}
  genericDescriptor={"Art Exhibit & <br/>Workshop Series"}
  date={"2022"}
  siteAddress={"https://confinementandcontagion.ca"}
  pictureData={[
    "./portfolio/confinement-site-pic-portrait.webp",
    "./portfolio/confinement-site-pic-landscape.webp",
    "Home page of website for art exhibit and workshop series Confinement and Contagion."
  ]}
  description={"Confinement and Contagion was a 2022 art exhibit and workshop series focusing on incarceration and it's impact upon marginalized communities. This site profiles the project: it's participating artists as well as the organizations and individuals that organized it."}
  order={"switch"}
/>