const card = document.querySelector(".card");

let intervalID = setInterval(playCardAnimation, 3000);

card.addEventListener("click", () => {
  clearInterval(intervalID);
  card.classList.toggle("card__animation_flipped");
});

function playCardAnimation() {
  card.classList.toggle("card__animation_shaking");
}
