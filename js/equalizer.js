function randomize() {
    for (let i = 1; i <= 3; i++) {
      const circle = document.getElementById(`circle${i}`);
      circle.style.animationDuration = `${Math.random() * 2 + 2}s`; // Randomize animation duration
    }
  }
  
  // Randomize the animation on page load and every 5 seconds
  randomize();
//   setInterval(randomize, 5000);
  