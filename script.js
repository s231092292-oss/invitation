// Make the "No" button run away
function moveButton() {
  const noBtn = document.getElementById("noBtn");

  const x =
    Math.random() * (window.innerWidth - noBtn.offsetWidth);

  const y =
    Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Reveal success message
function celebrate() {
  document
    .getElementById("response")
    .classList.remove("hidden");

  document.getElementById("yesBtn").style.display = "none";
  document.getElementById("noBtn").style.display = "none";
}
