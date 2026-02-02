document.addEventListener("DOMContentLoaded", () => {

  document.body.style.margin = "0";
  document.body.style.height = "100vh";
  document.body.style.display = "flex";
  document.body.style.flexDirection = "column";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";
  document.body.style.background =
    "linear-gradient(135deg, #667eea, #764ba2)";
  document.body.style.fontFamily = "Arial, sans-serif";

  const heading = document.querySelector("h2");
  heading.style.color = "white";
  heading.style.marginBottom = "20px";

  const image = document.getElementById("image");
  image.style.width = "320px";
  image.style.height = "320px";
  image.style.objectFit = "cover";
  image.style.borderRadius = "20px";
  image.style.border = "4px solid white";
  image.style.boxShadow = "0 15px 30px rgba(0,0,0,0.4)";
  image.style.transition = "transform 0.6s ease-in-out";

  let step = 0;

  setInterval(() => {

    // 🔁 RESET FIRST (IMPORTANT)
    image.style.transform = "rotateY(0deg)";

    // Force browser reflow (magic line ✨)
    image.offsetHeight;

    // Change image (your idea)
    if (step === 0) image.src = "cartoon1.jpeg";
    else if (step === 1) image.src = "cartoon2.jpeg";
    else if (step === 2) image.src = "cartoon3.jpeg";
    else if (step === 3) image.src = "cartoon4.jpeg";

    // Animate
    image.style.transform = "rotateY(180deg)";

    step++;
    if (step > 3) step = 0;

  }, 2000);
});
