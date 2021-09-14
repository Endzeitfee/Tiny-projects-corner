window.addEventListener("DOMContentLoaded", () => {
  const eyes = document.querySelector(".eyes");
  let eyesSize = "transparent 180px, rgba(27, 27, 27, 1) 180px)";
  window.addEventListener("mousemove", e => updateEyes(e));
  window.addEventListener("mousedown", e => {
    eyesSize = "transparent 120px, rgba(27, 27, 27, 1) 140px)";
    updateEyes(e);
  });
  window.addEventListener("mouseup", e => {
    eyesSize = "transparent 160px, rgba(27, 27, 27, 1) 200px)";
    updateEyes(e);
  });
  function updateEyes(e) {
    eyes.style.backgroundImage = `radial-gradient(circle at ${
      e.pageX / window.innerWidth * 100
    }% ${e.pageY / window.innerHeight * 100}%, ${eyesSize}`;
  }
});
