import createElement from "../helpers/domHelper.js";

function createBalloon(width, height, horizontalOffset) {
  const balloon = createElement({ tagName: "div", className: "balloon" });
  balloon.style.width = width + "px";
  balloon.style.height = height + "px";
  balloon.style.left = horizontalOffset + "px";

  return balloon;
}

export default function createBalloons(viewportWidth, viewportHeight, amount) {
  const balloonWidth = Math.min(200, Math.round(viewportWidth / amount));
  const balloonHeight = Math.min(300, Math.round(viewportHeight / 5));

  let currentOffset = balloonWidth;
  const balloons = [];
  for (let i = 0; i < amount; i++) {
    balloons.push(
      createBalloon(balloonWidth, balloonHeight, currentOffset * i)
    );
  }
  return balloons;
}
