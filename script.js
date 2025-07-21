function toggleEnvelope() {
  const wrapper = document.querySelector('.card-wrapper');
  const heartsContainer = document.querySelector('.hearts');
  const music = document.getElementById('background-music');
  const isOpen = wrapper.classList.contains('open');

  if (isOpen) {
    wrapper.classList.remove('open');
    music.pause();
    music.currentTime = 0;
  } else {
    wrapper.classList.add('open');
    music.play();
    createHearts();
  }
}

function createHearts() {
  const container = document.querySelector('.hearts');
  container.innerHTML = '';

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    const size = Math.random() * 10 + 10;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = `${Math.random() * 200 - 100}px`;
    heart.style.animationDuration = `${1.5 + Math.random()}s`;
    heart.style.opacity = Math.random() * 0.5 + 0.5;

    container.appendChild(heart);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("no-btn");
  const yesBtn = document.getElementById("yes-btn");

yesBtn.addEventListener("click", () => {
  document.body.classList.add("blur-active");
  const loveMessage = document.getElementById("love-message");
  loveMessage.classList.add("active");
});

  // "No" button avoid logic
  if (noBtn) {
    noBtn.addEventListener("mouseenter", () => {
      const directions = [
        { x: -100, y: 0 },   // Left
        { x: 100, y: 0 },    // Right
        { x: 0, y: -60 },    // Up
        { x: 0, y: 60 },     // Down
        { x: -80, y: -40 },  // Top left
        { x: 80, y: -40 },   // Top right
        { x: -80, y: 40 },   // Bottom left
        { x: 80, y: 40 }     // Bottom right
      ];

      const move = directions[Math.floor(Math.random() * directions.length)];
      noBtn.style.transform = `translate(${move.x}px, ${move.y}px)`;
    });
  }
});

