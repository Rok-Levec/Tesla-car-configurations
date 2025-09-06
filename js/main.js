const topBar = document.getElementById("top-bar");
exteriorColorSection = document.getElementById("exterior-buttons");
interiorColorSection = document.getElementById("interior-buttons");
const exteriorImage = document.getElementById("exterior-image");
const interiorImage = document.getElementById("interior-image");
//Handle Top Bar on scroll

const handleScroll = () => {
  const atTop = window.scrollY === 0;
  topBar.classList.toggle("visible-bar", atTop);
  topBar.classList.toggle("hidden-bar", !atTop);
};

// Handle Exterior color change selection
const handleColorButtonClick = (event) => {
  let button;

  console.log(event.target);
};

//Event listener
window.addEventListener("scroll", () => requestAnimationFrame(handleScroll));
exteriorColorSection.addEventListener("click", handleColorButtonClick);
interiorColorSection.addEventListener("click", handleColorButtonClick);
