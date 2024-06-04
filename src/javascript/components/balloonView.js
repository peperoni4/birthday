import createElement from "../helpers/domHelper";

function createBalloon(width, height, horizontalOffset) {
  const balloon = createElement({ tagName: "div", className: "balloon" });
  balloon.style.width = width;
  balloon.style.height = height;
  balloon.style.left = horizontalOffset;

  return balloon;
}

export default function createBalloons(viewportWidth, viewportHeight, amount) {
  const balloonWidth = Math.round(viewportWidth / amount);
  const balloonHeight = Math.round(viewportHeight / 4);

  let currentOffset = 0;
  const balloons = [];
  for (let i = 0; i < amount; i++) {
    balloons.push(createBalloon(balloonWidth, balloonHeight, currentOffset));
    currentOffset += balloonWidth;
  }
  return balloons;
}
