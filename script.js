const ball = document.getElementById('ball');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const reverse = document.getElementById('reverse');
const speedUp = document.getElementById('speed-up');
const slowDown = document.getElementById('slow-down');
const showSpeed = document.getElementById('show-speed');

const rollAnimation = [
  {
    transform: 'rotate(0) translate3D(-50%, -50%, 0)',
    color: 'white',
  },
  {
    color: 'blue',
    offset: 0.3,
  },
  {
    transform: 'rotate(360deg) translate3D(-50%, -50%, 0)',
    color: 'white',
  }
];

const rollOptions = {
  duration: 3000,
  iterations: Infinity
}

const roll = ball.animate(rollAnimation, rollOptions);

play.addEventListener('click', () => {
  // to be able to play after you click "reverse"
  roll.playbackRate = 1;
  roll.play()
});
pause.addEventListener('click', () => roll.pause());
reverse.addEventListener('click', () => roll.reverse());
speedUp.addEventListener('click', () => {
  roll.playbackRate = roll.playbackRate * 2;
  showSpeed.innerHTML = `Current Speed: ${roll.playbackRate}`
})
slowDown.addEventListener('click', () => {
  roll.playbackRate = roll.playbackRate * 0.5;
  showSpeed.innerHTML = `Current Speed: ${roll.playbackRate}`
})

window.addEventListener('DOMContentLoaded', () => {
  showSpeed.innerHTML = `Current Speed: ${roll.playbackRate}`
})
